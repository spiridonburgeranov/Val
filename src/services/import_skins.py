import logging
import time

from sqlalchemy import select
from src.db.db import async_session
from src.models.weapon_models import Weapon, Skin


logger = logging.getLogger(__name__)


async def sync_skins(weapons: list[dict]):
    start_ts = time.perf_counter()
    weapon_uuids = [w["uuid"] for w in weapons]
    async with async_session() as session:
        async with session.begin():
            result = await session.execute(
                select(Weapon.uuid).where(Weapon.uuid.in_(weapon_uuids))
            )
            existing_weapons = {row[0] for row in result}
            skins_from_api = []
            for w in weapons:
                if w["uuid"] not in existing_weapons:
                    continue
                for skin in w.get("skins", []):
                    skins_from_api.append((skin, w["uuid"]))
            skin_uuids = [s[0]["uuid"] for s in skins_from_api]
            result = await session.execute(
                select(Skin.uuid).where(Skin.uuid.in_(skin_uuids))
            )
            existing_skins = {row[0] for row in result}
            new_skins = [
                Skin(
                    uuid=skin["uuid"],
                    display_name=skin["displayName"],
                    display_icon=skin.get("displayIcon"),
                    weapon_id=weapon_uuid,
                )
                for skin, weapon_uuid in skins_from_api
                if skin["uuid"] not in existing_skins
            ]

            if new_skins:
                session.add_all(new_skins)
            created_count = len(new_skins)
        logger.info(
            "Skins sync finished | created=%s | elapsed=%.2fs",
            created_count,
            time.perf_counter() - start_ts,
        )
