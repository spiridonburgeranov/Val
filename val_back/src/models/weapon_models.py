from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship, declarative_base
from sqlalchemy.sql import func


Base = declarative_base()


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Weapon(Base):
    __tablename__ = "weapons"

    uuid = Column(String, primary_key=True, index=True)
    display_name = Column(String)
    display_icon = Column(String, nullable=True)
    type = Column(String)
    skins = relationship("Skin", back_populates="weapon", cascade="all, delete-orphan")


class Skin(Base):
    __tablename__ = "skins"

    uuid = Column(String, primary_key=True, index=True)
    display_name = Column(String)
    display_icon = Column(String, nullable=True)
    weapon_id = Column(String, ForeignKey("weapons.uuid"), nullable=False)
    weapon = relationship("Weapon", back_populates="skins")
    levels = relationship(
        "SkinLevel", back_populates="skin", cascade="all, delete-orphan"
    )
    chromas = relationship(
        "Chroma", back_populates="skin", cascade="all, delete-orphan"
    )


class SkinLevel(Base):
    __tablename__ = "skin_levels"

    uuid = Column(String, primary_key=True, index=True)
    display_name = Column(String)
    display_icon = Column(String, nullable=True)
    skin_id = Column(String, ForeignKey("skins.uuid"), nullable=False)
    skin = relationship("Skin", back_populates="levels")


class Chroma(Base):
    __tablename__ = "chromas"

    uuid = Column(String, primary_key=True, index=True)
    display_name = Column(String)
    display_icon = Column(String, nullable=True)
    skin_id = Column(String, ForeignKey("skins.uuid"), nullable=False)
    skin = relationship("Skin", back_populates="chromas")
