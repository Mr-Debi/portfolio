from sqlalchemy import (
    Column,
    Integer,
    String,
    DECIMAL,
    Enum,
    TIMESTAMP
)
from sqlalchemy.sql import func

from app.database import Base


class Donation(Base):
    __tablename__ = "donation"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String(100),
        nullable=False
    )

    email = Column(
        String(150),
        nullable=False,
        index=True
    )

    amount = Column(
        DECIMAL(10, 2),
        nullable=False
    )

    transaction_id = Column(
        String(100),
        nullable=False,
        unique=True
    )

    screenshot = Column(
        String(500),
        nullable=True
    )

    status = Column(
        Enum(
            "Pending",
            "Approved",
            "Rejected",
            name="donation_status"
        ),
        nullable=False,
        default="Pending"
    )

    created_at = Column(
        TIMESTAMP(timezone=True),
        server_default=func.now(),
        nullable=False
    )

# ==========================================
# Admin Table
# ==========================================

class Admin(Base):
    __tablename__ = "admins"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    username = Column(
        String(100),
        unique=True,
        nullable=False
    )

    password = Column(
        String(255),
        nullable=False
    )

    role = Column(
        String(30),
        nullable=False,
        default="Admin"
    )

    created_at = Column(
        TIMESTAMP(timezone=True),
        server_default=func.now(),
        nullable=False
    )