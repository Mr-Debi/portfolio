from app.database import SessionLocal
from app.models import Admin
from app.auth import hash_password

db = SessionLocal()

username = "admin"
password = "debi@123ABC"
            # ------------    type your password hear (step 1)


# Check if admin already exists
existing = db.query(Admin).filter(
    Admin.username == username
).first()

if existing:
    print("Admin already exists.")
else:
    admin = Admin(
        username=username,
        password=hash_password(password),
        role="Admin"
    )

    db.add(admin)
    db.commit()

    print("Admin created successfully!")

db.close()

# python create_admin.py    #----> for change the admin password (step2)
# uvicorn app.main:app --reload     #----> for restart the server (step3)
