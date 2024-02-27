from flask_sqlalchemy import SQLAlchemy
import os
from flask_jwt_extended import JWTManager

import jwt

db = SQLAlchemy()

class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(100), unique=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    
    def serialized(self):
        return {
            'id': self.id,
            'user_name': self.user_name,
            'email': self.email
        }
    
    def __repr__(self):
        return f'{self.user_name}'
