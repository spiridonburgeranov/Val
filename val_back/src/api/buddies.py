from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List
from src.models.buddie_models import Buddie
from src.db.db import get_async_session
from src.schemas.buddie_schemas import BuddieOut


router_buddies = APIRouter()


@router_buddies.get("/buddies", response_model=List[BuddieOut])
async def get_buddies(session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(Buddie))
    buddies = result.scalars().all()
    return buddies
