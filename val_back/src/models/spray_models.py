from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.orm import relationship

from src.models.weapon_models import Base


class Spray(Base):
    __tablename__ = "sprays"

    uuid = Column(String, primary_key=True, index=True)
    display_name = Column(String)
    display_icon = Column(String, nullable=True)
    levels = relationship(
        "SprayLevel", back_populates="spray", cascade="all, delete-orphan"
    )


class SprayLevel(Base):
    __tablename__ = "spray_levels"

    uuid = Column(String, primary_key=True, index=True)
    display_name = Column(String)
    display_icon = Column(String, nullable=True)
    spray_id = Column(String, ForeignKey("sprays.uuid"), nullable=False)
    spray = relationship("Spray", back_populates="levels")
