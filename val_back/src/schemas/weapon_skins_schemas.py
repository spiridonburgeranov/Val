from pydantic import BaseModel


class SkinLevelOut(BaseModel):
    uuid: str
    display_name: str
    display_icon: str | None


class ChromaOut(BaseModel):
    uuid: str
    display_name: str
    display_icon: str | None


class SkinOut(BaseModel):
    uuid: str
    display_name: str
    display_icon: str | None
    levels: list[SkinLevelOut] = []
    chromas: list[ChromaOut] = []
