from sqlalchemy import Column, Integer, String, DECIMAL, Enum, TIMESTAMP
from sqlalchemy.sql import func

from app.database import Base


class Donation(Base):
    __tablename__ = "donation"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(100), nullable=False)

    email = Column(String(150), nullable=False)

    amount = Column(DECIMAL(10, 2), nullable=False)

    transaction_id = Column(String(100), nullable=False)

    screenshot = Column(String(255))

    status = Column(
        Enum("Pending", "Approved", "Rejected"),
        default="Pending"
    )

    created_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )