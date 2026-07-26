from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# from fastapi.staticfiles import StaticFiles

from app.database import Base, engine
from app.models import Donation, Admin

from app.routers.donation import router as donation_router
from app.routers.admin import router as admin_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Donation API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://portfolio-debidutta.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# app.mount(
#     "/uploads",
#     StaticFiles(directory="uploads"),
#     name="uploads"
# )

app.include_router(
    donation_router,
    prefix="/api",
    tags=["Donation"]
)

app.include_router(
    admin_router,
    prefix="/admin",
    tags=["Admin"]
)


@app.get("/")
def home():

    return {
        "status": "success",
        "message": "Donation Backend Running"
    }