from pydantic import BaseModel


class WeaponOut(BaseModel):
    uuid: str
    display_name: str
    display_icon: str | None
    type: str
