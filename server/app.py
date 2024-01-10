###########################################
# Main Flask Configuration and End Points #
###########################################

import os
from flask import Flask, jsonify, request, Blueprint
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity


# file link
from api.admin import setup_admin
from api.model import db, User, Pro


# Flask configuration
app = Flask(__name__)
api = Blueprint('api', __name__)
CORS(app)  # Allow CORS requests to this API

port = 2001
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATION"] = False
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_KEY")
jwt = JWTManager(app)
db.init_app(app)
migrate = Migrate(app, db)
setup_admin(app)


##########################################################
# End points
##########################################################

# START Checking router connection
@app.route("/api/", methods=['GET', 'POST'])
def hello_world():
    response_body = {}
    response_body["message"] = f'Server is running on port {port}'
    return response_body, 200


# LOGIN authentication - token generation
@app.route("/api/login", methods=['POST'])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    if username != "test@test.it" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401
    
    access_token = create_access_token(identity=[username, ['patiente1', 'pateient2','patient3'], True])
    return jsonify(access_token=access_token)


# DASHBOARD get user data to show in the dashboard
@app.route("/api/dashboard", methods=["GET"])
@jwt_required()
def get_pro_dashboard():  
    current_user = get_jwt_identity()
    return jsonify(logged_in_as = current_user), 200


# SIGNUP
@app.route("/api/signup", methods=['POST'])
def signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    # Verify pro exist
    existing_pro = Pro.query.filter_by(email=email).first()
    if existing_pro:
        return jsonify({"message": "Username already exists"}), 400

    # Create new pro
    new_pro = Pro(email=email, password=password)

    # Add pro to the table
    db.session.add(new_pro)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201


# PATIENT get detail of a specific patient
@app.route('/api/patient/<int:patient_id>', methods=['GET'])
@jwt_required()
def get_pro_patient(patient_id):
    print(patient_id)

    return jsonify("response ok")

    # current_user = get_jwt_identity()
    # if current_user:
    #     return current_user.id, 200
    
    # return 'no data',400


##########################################################
##########################################################





# On server launch
if __name__ == "__main__":
    app.run(debug=True, port= port)
    db.create_all()


    #################################################################
#################################################################
# How to migrate tables structure changes without loosing data. eg: if I delate a column with data
# how can I split the /api/routes in the routes.py ??  (in order to keep app.py only for configurations)
# why blueprint don't work in my app.py environment?