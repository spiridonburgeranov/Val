from sqlalchemy import select
import logging
import time
from src.models.weapon_models import Weapon
from src.db.db import async_session
import httpx


logger = logging.getLogger(__name__)


async def fetch_weapons():
    async with httpx.AsyncClient(timeout=10.0) as client:
        resp = await client.get("https://valorant-api.com/v1/weapons")
        resp.raise_for_status()
        return resp.json()["data"]


async def sync_weapons(weapons: list[dict]):
    start_ts = time.perf_counter()
    api_uuids = [weapon["uuid"] for weapon in weapons]
    async with async_session() as session:
        async with session.begin():
            result = await session.execute(
                select(Weapon.uuid).where(Weapon.uuid.in_(api_uuids))
            )
            existing_uuids = {row[0] for row in result}
            new_weapons = [
                Weapon(
                    uuid=w["uuid"],
                    display_name=w["displayName"],
                    display_icon=w.get(
                        "displayIcon",
                    ),
                    type=w.get("category", "").split("::")[-1],
                )
                for w in weapons
                if w["uuid"] not in existing_uuids
            ]
            if new_weapons:
                session.add_all(new_weapons)
            created_count = len(new_weapons)
            logger.info(
                "Weapons sync finished | created=%s | elapsed=%.2fs",
                created_count,
                time.perf_counter() - start_ts,
            )
