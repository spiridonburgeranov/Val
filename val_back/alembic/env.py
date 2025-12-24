from logging.config import fileConfig
from alembic import context
from sqlalchemy import engine_from_config, pool

from src.models.weapon_models import Base
from src.core.config import settings

config = context.config
fileConfig(config.config_file_name)

target_metadata = Base.metadata


def get_sync_database_url() -> str:
    return settings.DATABASE_URL.replace("+asyncpg", "")


def run_migrations_offline():
    context.configure(
        url=get_sync_database_url(),
        target_metadata=target_metadata,
        literal_binds=True,
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online():
    connectable = engine_from_config(
        {
            **config.get_section(config.config_ini_section),
            "sqlalchemy.url": get_sync_database_url(),
        },
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection,
            target_metadata=target_metadata,
        )

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
