from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import text

from app.database import get_db
from app.auth import (
    verify_password,
    create_access_token,
    verify_token
)
from app.mail import send_thank_you_email

router = APIRouter()


# ===================================================
# ADMIN LOGIN
# ===================================================
@router.post("/login")
def login(
    username: str,
    password: str,
    db: Session = Depends(get_db)
):

    query = text("""
        SELECT *
        FROM admins
        WHERE username=:username
    """)

    admin = db.execute(
        query,
        {"username": username}
    ).mappings().first()

    if admin is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid Username"
        )

    if not verify_password(
        password,
        admin["password"]
    ):
        raise HTTPException(
            status_code=401,
            detail="Wrong Password"
        )

    token = create_access_token(
        {
            "sub": admin["username"]
        }
    )

    return {
        "success": True,
        "access_token": token,
        "token_type": "Bearer"
    }

# ===========================================
# Dashboard Statistics
# ===========================================

@router.get("/dashboard")
def dashboard_stats(
    current_user: str = Depends(verify_token),
    db: Session = Depends(get_db)
):

    total_amount = db.execute(text("""
        SELECT
            COALESCE(SUM(amount),0)
        FROM donation
        WHERE status='Approved'
    """)).scalar()

    total_donations = db.execute(text("""
        SELECT COUNT(*)
        FROM donation
    """)).scalar()

    approved = db.execute(text("""
        SELECT COUNT(*)
        FROM donation
        WHERE status='Approved'
    """)).scalar()

    pending = db.execute(text("""
        SELECT COUNT(*)
        FROM donation
        WHERE status='Pending'
    """)).scalar()

    rejected = db.execute(text("""
        SELECT COUNT(*)
        FROM donation
        WHERE status='Rejected'
    """)).scalar()

    return {

        "success": True,

        "data": {

            "total_amount": total_amount,

            "total_donations": total_donations,

            "approved": approved,

            "pending": pending,

            "rejected": rejected

        }

    }

# ===================================================
# GET DONATIONS
# ===================================================
@router.get("/donations")
def get_donations(
    current_user: str = Depends(verify_token),
    db: Session = Depends(get_db)
):

    query = text("""
        SELECT *
        FROM donation
        ORDER BY created_at DESC
    """)

    donations = db.execute(
        query
    ).mappings().all()

    return {
        "success": True,
        "data": donations
    }


# ===================================================
# APPROVE DONATION
# ===================================================
@router.put("/approve/{donation_id}")
def approve_donation(
    donation_id: int,
    current_user: str = Depends(verify_token),
    db: Session = Depends(get_db)
):

    donor = db.execute(
        text("""
            SELECT *
            FROM donation
            WHERE id=:id
        """),
        {
            "id": donation_id
        }
    ).mappings().first()

    if donor is None:
        raise HTTPException(
            status_code=404,
            detail="Donation Not Found"
        )

    db.execute(
        text("""
            UPDATE donation
            SET status='Approved'
            WHERE id=:id
        """),
        {
            "id": donation_id
        }
    )

    db.commit()

    try:

        send_thank_you_email(
            donor_name=donor["name"],
            donor_email=donor["email"],
            amount=donor["amount"],
            transaction_id=donor["transaction_id"]
        )

        print("✅ Thank-you email sent")

    except Exception as e:

        print("❌ Email sending failed")
        print(type(e).__name__)
        print(str(e))

    return {
        "success": True,
        "message": "Donation Approved"
    }


# ===================================================
# REJECT DONATION
# ===================================================
@router.put("/reject/{donation_id}")
def reject_donation(
    donation_id: int,
    current_user: str = Depends(verify_token),
    db: Session = Depends(get_db)
):

    result = db.execute(
        text("""
            UPDATE donation
            SET status='Rejected'
            WHERE id=:id
        """),
        {
            "id": donation_id
        }
    )

    db.commit()

    if result.rowcount == 0:
        raise HTTPException(
            status_code=404,
            detail="Donation Not Found"
        )

    return {
        "success": True,
        "message": "Donation Rejected"
    }


# ===================================================
# DELETE DONATION
# ===================================================
@router.delete("/delete/{donation_id}")
def delete_donation(
    donation_id: int,
    current_user: str = Depends(verify_token),
    db: Session = Depends(get_db)
):

    result = db.execute(
        text("""
            DELETE FROM donation
            WHERE id=:id
        """),
        {
            "id": donation_id
        }
    )

    db.commit()

    if result.rowcount == 0:
        raise HTTPException(
            status_code=404,
            detail="Donation Not Found"
        )

    return {
        "success": True,
        "message": "Donation Deleted Successfully"
    }