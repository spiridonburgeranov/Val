import logging
import time
from sqlalchemy import select
from src.models.buddie_models import Buddie
from src.db.db import async_session
import httpx


logger = logging.getLogger(__name__)


async def fetch_buddies():
    async with httpx.AsyncClient(timeout=10.0) as client:
        resp = await client.get("https://valorant-api.com/v1/buddies")
        resp.raise_for_status()
        return resp.json()["data"]


async def sync_buddies(buddies: list[dict]):
    start_ts = time.perf_counter()
    api_uuids = [buddie["uuid"] for buddie in buddies]
    async with async_session() as session:
        async with session.begin():
            result = await session.execute(
                select(Buddie.uuid).where(Buddie.uuid.in_(api_uuids))
            )
            existing_uuids = {row[0] for row in result}
            new_buddies = [
                Buddie(
                    uuid=b["uuid"],
                    display_name=b["displayName"],
                    display_icon=b.get("displayIcon"),
                )
                for b in buddies
                if b["uuid"] not in existing_uuids
            ]
            if new_buddies:
                session.add_all(new_buddies)
            created_count = len(new_buddies)
            logger.info(
                "Buddies sync finished | created=%s | elapsed=%.2fs",
                created_count,
                time.perf_counter() - start_ts,
            )
