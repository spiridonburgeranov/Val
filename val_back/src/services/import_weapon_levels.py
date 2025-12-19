from sqlalchemy import select
from src.db.db import async_session
from src.models.weapon_models import Skin, SkinLevel
import logging
import time

logger = logging.getLogger(__name__)


async def sync_skin_levels(skins: list[dict]):
    start_ts = time.perf_counter()
    levels = []
    skin_uuids = [s["uuid"] for s in skins]
    async with async_session() as session:
        async with session.begin():
            result = await session.execute(
                select(Skin.uuid).where(Skin.uuid.in_(skin_uuids))
            )
            existing_skins = {row[0] for row in result}
            for skin_json in skins:
                if skin_json["uuid"] not in existing_skins:
                    continue

                for level_json in skin_json.get("levels", []):
                    levels.append((level_json, skin_json["uuid"]))

            level_uuids = [lvl[0]["uuid"] for lvl in levels]
            result = await session.execute(
                select(SkinLevel.uuid).where(SkinLevel.uuid.in_(level_uuids))
            )
            existing_levels = {row[0] for row in result}

            new_levels = [
                SkinLevel(
                    uuid=lvl["uuid"],
                    display_name=lvl["displayName"],
                    display_icon=lvl.get("displayIcon"),
                    skin_id=skin_uuid,
                )
                for lvl, skin_uuid in levels
                if lvl["uuid"] not in existing_levels
            ]
            session.add_all(new_levels)
            created_count = len(new_levels)
            logger.info(
                "Levels sync finished | created=%s | elapsed=%.2fs",
                created_count,
                time.perf_counter() - start_ts,
            )
