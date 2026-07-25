# from app.database import engine

# try:
#     connection = engine.connect()
#     print("Database Connected Successfully!")
#     connection.close()

# except Exception as e:
#     print(e)

from app.auth import hash_password

print(hash_password("debi@123ABC"))