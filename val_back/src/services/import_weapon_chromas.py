from sqlalchemy import select
from src.db.db import async_session
from src.models.weapon_models import Skin, Chroma
import logging
import time

logger = logging.getLogger(__name__)


async def sync_chromas(skins: list[dict]):
    start_ts = time.perf_counter()
    chromas = []
    skin_uuids = [s["uuid"] for s in skins]
    async with async_session() as session:
        result = await session.execute(
            select(Skin.uuid).where(Skin.uuid.in_(skin_uuids))
        )
        existing_skins = {row[0] for row in result}
        for skin_json in skins:
            skin_id = skin_json["uuid"]
            if skin_id not in existing_skins:
                continue
            for chroma_json in skin_json.get("chromas", []):
                chromas.append((chroma_json, skin_id))
        chroma_uuids = [c[0]["uuid"] for c in chromas]
        result = await session.execute(
            select(Chroma.uuid).where(Chroma.uuid.in_(chroma_uuids))
        )
        existing_chromas = {row[0] for row in result}
        new_chromas = [
            Chroma(
                uuid=c["uuid"],
                display_name=c["displayName"],
                display_icon=c.get("displayIcon"),
                skin_id=skin_id,
            )
            for c, skin_id in chromas
            if c["uuid"] not in existing_chromas
        ]
        if new_chromas:
            session.add_all(new_chromas)
        created_count = len(new_chromas)
        logger.info(
            "Chromas sync finished | created=%s | elapsed=%.2fs",
            created_count,
            time.perf_counter() - start_ts,
        )
