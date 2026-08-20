from dotenv import load_dotenv
import os

load_dotenv()

# ==========================
# Database
# ==========================

DATABASE_URL = os.getenv("DATABASE_URL")

# Local MySQL (optional)
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_NAME = os.getenv("DB_NAME")

# ==========================
# JWT
# ==========================

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

ACCESS_TOKEN_EXPIRE_MINUTES = int(
    os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "60")
)

# ==========================
# Mail
# ==========================

MAIL_USERNAME = os.getenv("MAIL_USERNAME")
MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
MAIL_FROM = os.getenv("MAIL_FROM")

MAIL_SERVER = os.getenv(
    "MAIL_SERVER",
    "smtp.gmail.com"
)

MAIL_PORT = int(
    os.getenv(
        "MAIL_PORT",
        "587"
    )
)

# ==========================
# Cloudinary
# ==========================

CLOUDINARY_CLOUD_NAME = os.getenv("CLOUDINARY_CLOUD_NAME")

CLOUDINARY_API_KEY = os.getenv("CLOUDINARY_API_KEY")

CLOUDINARY_API_SECRET = os.getenv("CLOUDINARY_API_SECRET")


BREVO_API_KEY = os.getenv("BREVO_API_KEY")