###########################################
# Main Flask Configuration and End Points #
###########################################

import os
from flask import Flask, jsonify, request # Blueprint
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity


# file link
from api.admin import setup_admin
from api.model import db, Pro


# Flask configuration
app = Flask(__name__)
CORS(app)  # Allow CORS requests to this API
CORS(app, origins="http://localhost:1954")


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


@app.route("/", methods=['GET'])
def hello_world():
    return jsonify({"msg": "chech the /admin/ path"}), 401



# SIGNUP
@app.route("/api/signup", methods=['POST'])
def signup():

    email = request.json.get("email", None) 
    password = request.json.get("password", None)

    print('fetching data: ', email, password)

    # Verify pro exist
    existing_pro = Pro.query.filter_by(email=email).first()
    if existing_pro:
        return jsonify({"message": "Username already exists"}), 400

    # Create tables data
    new_pro = Pro(email=email, password=password)

    # Add pro to the table
    db.session.add(new_pro)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201




# @app.route("/api/signup", methods=['GET'])
# def signup():


#     data={
#         "name":"Lorenzo",
#         "password":"secret"
#     }

#     return jsonify(data), 200
    


# LOGIN - authentication - token generation
@app.route("/api/login", methods=['POST'])
def login():
    email = request.json.get("email")
    password = request.json.get("password")

    pro = Pro.query.filter_by(email=email, password = password).first()
    
    if pro:
        print('api/logig: pro exist')
        access_token = create_access_token(identity=[email, ['patiente1', 'pateient2','patient3'], True])
        return jsonify(access_token=access_token)
    
    return jsonify({"msg": "Bad username or password"}), 401

# DASHBOARD - get user data to show in the dashboard
@app.route("/api/dashboard", methods=["GET"])
@jwt_required()
def get_pro_dashboard():  
    current_user = get_jwt_identity()
    return jsonify(logged_in_as = current_user), 200


##########################################################
##########################################################



# On server launch
if __name__ == "__main__":
    db.create_all()
    app.run(debug=True, port= port)


#################################################################









