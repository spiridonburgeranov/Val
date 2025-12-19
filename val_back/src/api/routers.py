from fastapi import APIRouter

from .buddies import router_buddies
from .weapons import router_weapon
from .sprays import router_sprays


api_router = APIRouter()


api_router.include_router(router_weapon)
api_router.include_router(router_buddies)
api_router.include_router(router_sprays)
