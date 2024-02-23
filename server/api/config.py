import os


# flask main settingport = 2001
SQLALCHEMY_DATABASE_URI = "sqlite:///database.db"
SQLALCHEMY_TRACK_MODIFICATION = False
JWT_SECRET_KEY = os.getenv("JWT_KEY")

