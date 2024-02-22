###########################################
# Main Flask Configuration and End Points #
###########################################

import os
from flask import Flask, jsonify, request # Blueprint
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from api.model import db


# file link
from api.admin import setup_admin
from api.routes import api


# Flask configuration
app = Flask(__name__)

port = 2001
app.register_blueprint(api, url_prefix='/api') #set route bluepring /api/
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATION"] = False
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_KEY")
jwt = JWTManager(app)
db.init_app(app)
migrate = Migrate(app, db)
setup_admin(app)
CORS(app)  # Allow CORS requests to this API


# On server launch
if __name__ == "__main__":
    db.create_all()
    app.run(debug=True, port= port)


#################################################################




