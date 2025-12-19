import logging
import time
from sqlalchemy import select
from src.models.spray_models import Spray
from src.db.db import async_session
import httpx


logger = logging.getLogger(__name__)


async def fetch_sprays():
    async with httpx.AsyncClient(timeout=10.0) as client:
        resp = await client.get("https://valorant-api.com/v1/sprays")
        resp.raise_for_status()
        return resp.json()["data"]


async def sync_sprays(sprays: list[dict]):
    start_ts = time.perf_counter()
    api_uuids = [spray["uuid"] for spray in sprays]
    async with async_session() as session:
        async with session.begin():
            result = await session.execute(
                select(Spray.uuid).where(Spray.uuid.in_(api_uuids))
            )
            existing_uuids = {row[0] for row in result}
            new_sprays = [
                Spray(
                    uuid=s["uuid"],
                    display_name=s["displayName"],
                    display_icon=s.get("fullTransparentIcon"),
                )
                for s in sprays
                if s["uuid"] not in existing_uuids
            ]
            if new_sprays:
                session.add_all(new_sprays)
            created_count = len(new_sprays)
            logger.info(
                "Levels sync finished | created=%s | elapsed=%.2fs",
                created_count,
                time.perf_counter() - start_ts,
            )
