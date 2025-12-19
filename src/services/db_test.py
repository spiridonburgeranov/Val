from sqlalchemy import text
from src.db.db import engine
import asyncio


async def check_tables():
    async with engine.begin() as conn:
        result = await conn.execute(
            text("SELECT name FROM sqlite_master WHERE type='table';")
        )
        tables = [row[0] for row in result.fetchall()]
        print("Tables in DB:", tables)


asyncio.run(check_tables())
