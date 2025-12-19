from pydantic import BaseModel


class BuddieOut(BaseModel):
    uuid: str
    display_name: str
    display_icon: str | None
