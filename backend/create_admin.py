from sqlalchemy import text

from app.database import SessionLocal

from app.auth import hash_password

db = SessionLocal()

password = hash_password("debi@xxxxxx")     
                        # ------------    type your password hear (step 1)

query = text("""

UPDATE admins

SET password=:password

WHERE username='admin'

""")

db.execute(
    query,
    {
        "password": password
    }
)

db.commit()

print("Admin password updated.")


# python create_admin.py    #----> for change the admin password (step2)
# uvicorn app.main:app --reload     #----> for restart the server (step3)
