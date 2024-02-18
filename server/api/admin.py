import os
from api.model import db, Pro
from flask_admin.contrib.sqla import ModelView
from flask_admin import Admin

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cosmo'
    admin = Admin(app, name='Admin panel', template_mode='bootstrap4')


    class ProAdminView(ModelView):
        column_list = ['id', 'email', 'password'] 

    
    # Admin panel views
    admin.add_view(ProAdminView(Pro, db.session))




