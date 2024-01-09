from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import UniqueConstraint

db = SQLAlchemy()

# User Administration
class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)

    def serialize(self):
        return {
            "id": self.id, 
            "email": self.email, 
            "name": self.name
        }


class Pro(db.Model):
    __tablename__ = 'pro'
    id = db.Column(db.Integer, primary_key=True)
    
    name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    password = db.Column(db.String(100))

    def serialize(self):
        return {
            "id": self.id, 
            "email": self.email, 
            "name": self.name,
            "last_name": self.last_name,
            "phone": self.phone
        }


class Patient(db.Model):
    __tablename__ = "patient"
    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    address = db.Column(db.String(200))

    def serialize(self):
        return {
            "id": self.id, 
            "email": self.email, 
            "name": self.name, 
            "last_name": self.last_name, 
            "phone": self.phone, 
            "address": self.address
        }


class Specialization(db.Model):
    __tablename__ = "specialization"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }


class Service(db.Model):
    __tablename__ = "service"
    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(50), nullable=False)
    specialization_id = db.Column(db.Integer, db.ForeignKey('specialization.id'), nullable=False)
    specialization = db.relationship(Specialization)

    def serialize(self):
        serialized_service = {
            "id": self.id,
            "name": self.name,
            "specialization_id": self.specialization_id,
            "specialization": self.specialization.serialize() if self.specialization else None
        }
        
        return serialized_service


class ProPage(db.Model):
    __tablename__ = 'pro_page'
    id = db.Column(db.Integer, primary_key=True)

    page_url = db.Column(db.String(200), nullable=True)
    color = db.Column(db.String(100), nullable=True)
    whatsapp_number = db.Column(db.Integer)
    google_url = db.Column(db.String(200))
    facebook_url = db.Column(db.String(200))
    instagram_url = db.Column(db.String(200))

    pro_id = db.Column(db.Integer, db.ForeignKey("pro.id"), unique=True, nullable=False)
    pro = db.relationship(Pro)

    def serialize(self):
        return {
            "id": self.id,
            "page_url": self.page_url,
            "color": self.color,
            "whatsapp_number": self.whatsapp_number,
            "google_url": self.google_url,
            "facebook_url": self.facebook_url,
            "instagram_url": self.instagram_url,
            "pro": self.pro.serialize() if self.pro else None
        }
    

class ProService(db.Model):
    __tablename__ = 'pro_service'
    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Integer, nullable=False)
    visit_type = db.Column(db.String(100), nullable=True)
    visit_duration = db.Column(db.Integer, nullable=True)
    day_of_week = db.Column(db.String(20), nullable=False)
    start_time = db.Column(db.String(20), nullable=False)
    end_time = db.Column(db.String(20), nullable=False)
    
    pro_id = db.Column(db.Integer, db.ForeignKey('pro.id'), nullable=False)
    pro = db.relationship(Pro)

    service_id = db.Column(db.Integer, db.ForeignKey('service.id'), nullable=False)
    service = db.relationship(Service)
    
    specialization_id = db.Column(db.Integer, db.ForeignKey('specialization.id'), nullable=True)
    specialization = db.relationship(Specialization)

    # Composit External Key link
    __table_args__ = (
        UniqueConstraint('service_id', 'specialization_id', name='unique_service_specialization'),
    )

    def serialize(self):
        serialized_pro_service = {
            "id": self.id,
            "pro_id": self.pro_id,
            "specialization_id": self.specialization_id,
            "service_id": self.service_id,
            "price": self.price,
            "visit_type": self.visit_type,
            "visit_duration": self.visit_duration,
            "day_of_week": self.day_of_week,
            "start_time": str(self.start_time),
            "end_time": str(self.end_time)
        }
        return serialized_pro_service



class Booking(db.Model):
    __tablename__ = "booking"
    id = db.Column(db.Integer, primary_key=True)

    date = db.Column(db.Date, nullable=False)
    start_time = db.Column(db.String(20), nullable=False)
    end_time = db.Column(db.String(20), nullable=False)
    status = db.Column(db.String(100), nullable=True)

    pro_id = db.Column(db.Integer, db.ForeignKey('pro.id'), nullable=False)
    pro = db.relationship(Pro)

    pro_service_id = db.Column(db.Integer, db.ForeignKey('pro_service.id'), nullable=False)
    pro_service = db.relationship(ProService)

    patient_id = db.Column(db.Integer, db.ForeignKey('patient.id'), nullable=False)
    patient = db.relationship(Patient)
    

    def serialize(self):
        return {
            "id": self.id,
            "date": str(self.date),
            "start_time": str(self.start_time),
            "status": self.status,
            "patient_id": self.patient_id,
            "patient": self.patient.serialize() if self.patient else None,
            "pro_id": self.pro_id,
            "pro": self.pro.serialize() if self.pro else None,
            "pro_service_id": self.pro_service_id,
            "pro_service": self.pro_service.serialize() if self.pro_service else None,
        }




class ProHoliday(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    date = db.Column(db.Date, nullable=False)
    start_time = db.Column(db.String(20), nullable=True)
    end_time = db.Column(db.String(20), nullable=True)

    pro_id = db.Column(db.Integer, db.ForeignKey('pro.id'), nullable=False)
    pro = db.relationship(Pro)

    def serialize(self):
        return {
            "id": self.id,
            "pro_id": self.pro_id,
            "pro": self.pro.serialize() if self.pro else None,
            "date": self.date.value, 
            "full_day": self.full_day.value, 
            "start_time": str(self.start_time) if self.start_time else None,
            "end_time": str(self.end_time) if self.end_time else None,
        }




# ////////////////////////////////////
# ///////// next release

# class ProServiceAvailability(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
    
#     day_of_week = db.Column(db.String(20), nullable=False)
#     start_time = db.Column(db.String(20), nullable=False)
#     end_time = db.Column(db.String(20), nullable=False)

#     pro_id = db.Column(db.Integer, db.ForeignKey("pro.id"), nullable=False)
#     pro = db.relationship(Pro)

#     pro_service_id = db.Column(db.Integer, db.ForeignKey("pro_service.id"), nullable=False)
#     pro_service = db.relationship(ProService)

#     def serialize(self):
#         return {
#             "id": self.id,
#             "day_of_week": self.day_of_week,
#             "start_time": str(self.start_time),
#             "end_time": str(self.end_time),
#             "pro_id": self.pro_id,
#             "pro": self.pro.serialize() if self.pro else None,
#             "pro_service_id": self.pro_service_id,
#             "pro_service": self.pro_service.serialize() if self.pro_service else None,
#         }

    
# class VisitType(db.Model):
#     __tablename__ = "visit_type"
#     id = db.Column(db.Integer, primary_key=True)

#     name = db.Column(db.String(50), nullable=False)

#     specialization_id = db.Column(db.Integer, db.ForeignKey("specialization.id"), nullable=False)
#     specialization = db.relationship(Specialization)

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "specialization": self.specialization.serialize() if self.specialization else None
#         }


# class VisitDuration(db.Model):
#     __tablename__ = "visit_duration"
#     id = db.Column(db.Integer, primary_key=True)

#     slot = db.Column(db.String(50), nullable=False)
#     duration = db.Column(db.Integer, nullable=False)

#     service_id = db.Column(db.Integer, db.ForeignKey('service.id'), nullable=False)
#     service = db.relationship(Service)

#     def serialize(self):
#         return {
#             "id": self.id,
#             "slot": self.slot,
#             "duration": self.duration,
#             "service": self.service.serialize() if self.service else None
#         }



# class Subscription(db.Model):
#     __tablename__ = "subscription"
#     id = db.Column(db.Integer, primary_key=True)

#     name = db.Column(db.String(50), nullable=False)
#     month = db.Column(db.Integer, nullable=False)
#     price = db.Column(db.Integer, nullable=False)

#     pro_id = db.Column(db.Integer, db.ForeignKey('pro.id'), nullable=False)
#     pro = db.relationship(Pro)

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "month": self.month,
#             "price": self.price,
#             "pro_id": self.pro_id,
#             "pro": self.pro.serialize() if self.pro else None
#         }