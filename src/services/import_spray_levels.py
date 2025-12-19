import logging
import time
from sqlalchemy import select
from src.db.db import async_session
from src.models.spray_models import Spray, SprayLevel


logger = logging.getLogger(__name__)


async def sync_spray_levels(sprays: list[dict]):
    start_ts = time.perf_counter()
    levels = []
    spray_uuids = [s["uuid"] for s in sprays]
    async with async_session() as session:
        async with session.begin():
            result = await session.execute(
                select(Spray.uuid).where(Spray.uuid.in_(spray_uuids))
            )
            existing_sprays = {row[0] for row in result}
            for spray_json in sprays:
                if spray_json["uuid"] not in existing_sprays:
                    continue

                for level_json in spray_json.get("levels", []):
                    levels.append((level_json, spray_json["uuid"]))
            level_uuids = [lvl[0]["uuid"] for lvl in levels]
            result = await session.execute(
                select(SprayLevel.uuid).where(SprayLevel.uuid.in_(level_uuids))
            )
            existing_levels = {row[0] for row in result}
            new_levels = [
                SprayLevel(
                    uuid=lvl["uuid"],
                    display_name=lvl["displayName"],
                    display_icon=lvl.get("displayIcon"),
                    spray_id=spray_uuid,
                )
                for lvl, spray_uuid in levels
                if lvl["uuid"] not in existing_levels
            ]

            session.add_all(new_levels)
            created_count = len(new_levels)
            logger.info(
                "Levels sync finished | created=%s | elapsed=%.2fs",
                created_count,
                time.perf_counter() - start_ts,
            )
