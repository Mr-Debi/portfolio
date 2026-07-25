import uuid

import cloudinary.uploader

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
from app.cloudinary_config import *


router = APIRouter()


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

        # ==========================
        # Check Duplicate Transaction
        # ==========================

        existing = db.query(Donation).filter(
            Donation.transaction_id == transaction_id
        ).first()

        if existing:

            raise HTTPException(
                status_code=400,
                detail="Transaction ID already submitted."
            )

        # ==========================
        # Validate Image
        # ==========================

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
                detail="Only JPG, JPEG, PNG and WEBP images are allowed."
            )

        # ==========================
        # Upload to Cloudinary
        # ==========================

        upload_result = cloudinary.uploader.upload(

            screenshot.file,

            folder="portfolio-donation-panel",

            public_id=str(uuid.uuid4()),

            resource_type="image"

        )

        image_url = upload_result["secure_url"]

        # ==========================
        # Save Donation
        # ==========================

        donation = Donation(

            name=name,

            email=email,

            amount=amount,

            transaction_id=transaction_id,

            screenshot=image_url,

            status="Pending"

        )

        db.add(donation)

        db.commit()

        db.refresh(donation)

        return {

            "success": True,

            "message": "Donation submitted successfully.",

            "donation_id": donation.id,

            "image": image_url

        }

    except HTTPException:

        db.rollback()

        raise

    except Exception as e:

        db.rollback()

        raise HTTPException(

            status_code=500,

            detail=str(e)

        )