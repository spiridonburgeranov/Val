from contextlib import asynccontextmanager
from fastapi import FastAPI
from src.api.admin import admin_router
from src.db.db import engine
from src.api.routers import api_router
import logging


logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
)


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup (если нужно что-то инициализировать)
    yield
    # Shutdown — закрываем движок
    await engine.dispose()


app = FastAPI(lifespan=lifespan)

app.include_router(admin_router, tags=["Admin scripts"])
app.include_router(api_router, tags=["api v1"])
