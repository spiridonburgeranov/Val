from sqlalchemy import Column, String
from src.models.weapon_models import Base


class Buddie(Base):
    __tablename__ = "buddies"

    uuid = Column(String, primary_key=True, index=True)
    display_name = Column(String)
    display_icon = Column(String, nullable=True)
