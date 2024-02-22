from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()



class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(100), unique=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))

    def serialize(self):
        return {
            "id": self.id, 
            "user_name": self.user_name,  
            "email": self.email, 
            "password": self.password,
        }
    
    def __repr__(self):
        return f'{self.user_name}'





