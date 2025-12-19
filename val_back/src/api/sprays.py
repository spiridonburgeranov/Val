from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List
from src.models.spray_models import Spray
from src.db.db import get_async_session
from src.schemas.spray_schemas import SprayOut


router_sprays = APIRouter()


@router_sprays.get("/sprays", response_model=List[SprayOut])
async def get_buddies(session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(Spray))
    sprays = result.scalars().all()
    return sprays
