import os
from model import db, User, Pro, Patient, Service, ProPage, ProService, Specialization, ProHoliday, Booking
from flask_admin.contrib.sqla import ModelView
from flask_admin import Admin

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cosmo'
    admin = Admin(app, name='Admin panel', template_mode='bootstrap4')
  

    class PatientView(ModelView):
        column_list = ['id', 'name', 'last_name', 'email', 'phone', 'address']
    
    class ProServiceView(ModelView):
        column_list = ['id', 'pro', 'specialization', 'service', 'visit_type', 'visit_duration', 'price', 'day_of_week', 'start_time', 'end_time']
        column_formatters = { 
            'pro': lambda v, c, m, p: m.pro.email if m.pro else None,
            'service': lambda v, c, m, p: m.service.name if m.service else None,
            'specialization': lambda v, c, m, p: m.specialization.name if m.specialization else None
        }

    class ProHolidayView(ModelView):
        column_list = ['id', 'pro', 'date', 'start_time', 'end_time']
        column_formatters = { 
            'pro': lambda v, c, m, p: m.pro.email if m.pro else None,
        }


    class ProPageView(ModelView):
        column_list = ['id', 'pro', 'page_url', 'color', 'whatsapp_number', 'google_url', 'facebook_url', 'instagram_url']
        column_formatters = { 
            'pro': lambda v, c, m, p: m.pro.email if m.pro else None
        }


    class ServiceView(ModelView):
        column_list = ['id', 'specialization', 'name']
        column_formatters = { 
            'specialization': lambda v, c, m, p: m.specialization.name if m.specialization else None
        }

    
    class BookingView(ModelView):
        column_list = ['id', 'date', 'start_time', 'end_time', 'status', 'pro', 'pro_service', 'patient']
        column_formatters = { 
            'pro': lambda v, c, m, p: m.pro.email if m.pro else None,
            'pro_service': lambda v, c, m, p: m.pro_service.service if m.pro_service else None,
            'patient': lambda v, c, m, p: m.patient.email if m.patient else None
        }

    
    admin.add_view(ModelView(Pro, db.session))
    admin.add_view(ProServiceView(ProService, db.session))
    admin.add_view(PatientView(Patient, db.session))
    admin.add_view(BookingView(Booking, db.session))
    admin.add_view(ProHolidayView(ProHoliday, db.session))
    admin.add_view(ServiceView(Service, db.session))
    admin.add_view(ProPageView(ProPage, db.session))
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Specialization, db.session))



    # admin.add_view(ModelView(ProServiceAvailability, db.session))
    # admin.add_view(ModelView(Service, db.session))
    # admin.add_view(ModelView(ProPage, db.session))
    # admin.add_view(ModelView(Booking, db.session))
    # admin.add_view(ModelView(Patient, db.session))
    # admin.add_view(ModelView(ProService, db.session))
    # admin.add_view(ModelView(ProHoliday, db.session)) 


