from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List
from src.models.weapon_models import Weapon, Skin
from src.db.db import get_async_session
from sqlalchemy.orm import selectinload
from src.schemas.weapon_schemas import WeaponOut
from src.schemas.weapon_skins_schemas import SkinOut


router_weapon = APIRouter()


@router_weapon.get("/weapons", response_model=List[WeaponOut], summary="Get Weapons")
async def get_weapons(session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(Weapon))
    weapons = result.scalars().all()
    return weapons


@router_weapon.get(
    "/weapons/{weapon_uuid}/skins",
    description="Получаем скины по `weapon_uuid`",
    summary="Get Skins for Weapon",
)
async def get_skins(
    weapon_uuid: str, session: AsyncSession = Depends(get_async_session)
):
    result = await session.execute(
        select(Weapon)
        .options(selectinload(Weapon.skins))
        .where(Weapon.uuid == weapon_uuid)
    )
    weapon = result.scalars().first()
    if not weapon:
        raise HTTPException(status_code=404, detail="Weapon not found")
    return weapon.skins


@router_weapon.get("/skins/{skin_uuid}", response_model=SkinOut, summary="Get Skin")
async def get_skin(skin_uuid: str, session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(
        select(Skin)
        .options(selectinload(Skin.levels), selectinload(Skin.chromas))
        .where(Skin.uuid == skin_uuid)
    )
    skin = result.scalars().first()
    if not skin:
        raise HTTPException(status_code=404, detail="Skin not found")
    return skin
