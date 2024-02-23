from flask_sqlalchemy import SQLAlchemy
import os
from flask_jwt_extended import JWTManager
from time import time

import jwt

db = SQLAlchemy()

class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(100), unique=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))

    def get_reset_token(self, expires=500):
        print('Reset psw: token generation')
        secret_key = os.getenv('SECRET_KEY_FLASK')
        if secret_key is None:
            raise ValueError("SECRET_KEY_FLASK not set correctly")

        # Generate temporary token for psw reset
        token = jwt.encode({'reset_password': self.user_name, 'exp': time() + expires}, key=secret_key)
        return token
    
    def serialize(self):
        return {
            "id": self.id, 
            "user_name": self.user_name,  
            "email": self.email, 
            "password": self.password,
        }
    
    def __repr__(self):
        return f'{self.user_name}'
