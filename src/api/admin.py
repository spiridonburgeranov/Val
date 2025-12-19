from http import HTTPStatus
from fastapi import APIRouter
from src.services.import_weapons import sync_weapons, fetch_weapons
from src.services.import_buddies import sync_buddies, fetch_buddies
from src.services.import_skins import sync_skins
from src.services.import_weapon_levels import sync_skin_levels
from src.services.import_weapon_chromas import sync_chromas
from src.services.import_sprays import fetch_sprays, sync_sprays
from src.services.import_spray_levels import sync_spray_levels


admin_router = APIRouter()


@admin_router.post(
    "/admin/sync-weapons", description="Запускает скрипт на получение всего АРУЖИЯ"
)
async def sync_weapons_endpoint():
    try:
        weapons = await fetch_weapons()
        await sync_weapons(weapons)
        return {HTTPStatus.OK}
    except Exception as e:
        return {"status": "error", "detail": str(e)}


@admin_router.post("/admin/sync-skins")
async def sync_skins_endpoint():
    try:
        weapons = await fetch_weapons()
        await sync_skins(weapons)
        return {"status": "ok"}
    except Exception as e:
        return {"status": "error", "detail": str(e)}


@admin_router.post("/admin/sync-skin-levels")
async def sync_skin_levels_endpoint():
    try:
        weapons = await fetch_weapons()
        all_skins = [skin for w in weapons for skin in w.get("skins", [])]
        await sync_skin_levels(all_skins)
        return {"status": "ok"}
    except Exception as e:
        return {"status": "error", "detail": str(e)}


@admin_router.post("/admin/sync-skin-chromas")
async def sync_skin_chromas():
    try:
        weapons = await fetch_weapons()
        all_skins = [skin for w in weapons for skin in w.get("skins", [])]
        await sync_chromas(all_skins)
        return {"status": "ok"}
    except Exception as e:
        return {"status": "error", "detail": str(e)}


@admin_router.post(
    "/admin/sync-buddies", description="Запускает скрипт на получение всех брелоков"
)
async def sync_buddies_endpoint():
    try:
        buddies = await fetch_buddies()
        await sync_buddies(buddies)
        return {"status": "ok"}
    except Exception as e:
        return {"status": "error", "detail": str(e)}


@admin_router.post(
    "/admin/sync-sprays", description="Запускает скрипт на получение всех спреев"
)
async def sync_sprays_endpoint():
    try:
        sprays = await fetch_sprays()
        await sync_sprays(sprays)
        return {"status": "ok"}
    except Exception as e:
        return {"status": "error", "detail": str(e)}


@admin_router.post("/admin/sync-spray-levels")
async def sync_spray_levels_endpoint():
    try:
        sprays = await fetch_sprays()
        await sync_spray_levels(sprays)
        return {"status": "ok"}
    except Exception as e:
        return {"status": "error", "detail": str(e)}
