from pydantic import BaseModel


class SprayOut(BaseModel):
    uuid: str
    display_name: str
    display_icon: str | None
