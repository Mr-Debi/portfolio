import os
import shutil
import uuid

from fastapi import (
    APIRouter,
    UploadFile,
    File,
    Form,
    Depends,
    HTTPException
)

from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Donation

router = APIRouter()

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/donations")
async def create_donation(

    name: str = Form(...),

    email: str = Form(...),

    amount: float = Form(...),

    transaction_id: str = Form(...),

    screenshot: UploadFile = File(...),

    db: Session = Depends(get_db)

):

    try:

        allowed = [
            "jpg",
            "jpeg",
            "png",
            "webp"
        ]

        extension = screenshot.filename.split(".")[-1].lower()

        if extension not in allowed:

            raise HTTPException(
                status_code=400,
                detail="Only JPG, PNG and WEBP images are allowed."
            )

        filename = f"{uuid.uuid4()}.{extension}"

        filepath = os.path.join(
            UPLOAD_FOLDER,
            filename
        )

        with open(filepath, "wb") as buffer:

            shutil.copyfileobj(
                screenshot.file,
                buffer
            )

        donation = Donation(

            name=name,

            email=email,

            amount=amount,

            transaction_id=transaction_id,

            screenshot=filename,

            status="Pending"

        )

        db.add(donation)

        db.commit()

        db.refresh(donation)

        return {

            "success": True,

            "message": "Donation Submitted Successfully",

            "donation_id": donation.id

        }

    except Exception as e:

        db.rollback()

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )