from pydantic import BaseModel


class DonationResponse(BaseModel):
    success: bool
    message: str