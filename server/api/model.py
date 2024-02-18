from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import UniqueConstraint

db = SQLAlchemy()



class Pro(db.Model):
    __tablename__ = 'pro'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))

    def serialize(self):
        return {
            "id": self.id, 
            "email": self.email, 
            "name": self.name,
        }
    
    def __repr__(self):
        return f'<User {self.email}>'





