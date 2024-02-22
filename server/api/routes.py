# Flask import
from flask import Flask, Blueprint, jsonify, request
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

# Bcript import
import bcrypt

# File import
from api.model import db, Users


############################
# General setting
###########################

# blueprint setting
api = Blueprint('api', __name__)


# Bcrypt setting for psw hashing
password = b"super secret password"
# Hash a password for the first time, with a randomly-generated salt
hashed = bcrypt.hashpw(password, bcrypt.gensalt())
# Check that an unhashed password matches one that has previously been
# hashed
if bcrypt.checkpw(password, hashed):
    print("It Matches!")
else:
    print("It Does not Match :(")





##########################################################
# End points
##########################################################


@app.route("/", methods=['GET'])
def hello_world():
    return jsonify({"msg": "chech the /admin/ path"}), 201


# SIGNUP
@api.route("/signup", methods=['POST'])
def signup():

    user_name = request.json.get("userName", None) 
    email = request.json.get("email", None) 
    password = request.json.get("password", None)

    # Verify pro exists
    existing_pro = Users.query.filter_by(email=email).first()
    if existing_pro:
        return jsonify({"message": "Not registered: user already exists"}), 401
    if email == '' or password ==  '' or user_name == '':
        return jsonify({"message": "Not registered: Invalid Email or Password"}), 401

    # Create record instance
    new_pro = Users(user_name = user_name, email = email, password = password)

    # Add instance to the table
    db.session.add(new_pro)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 200




# LOGIN - authentication - token generation
@api.route("/login", methods=['POST'])
def login():
    email = request.json.get("email")
    password = request.json.get("password")

    # Check if pro exists
    pro = Users.query.filter_by(email=email, password=password).first()
    
    if pro:
        # Define identity as a dictionary with keys and values
        identity = {
            "id": pro.id,
            "user_name": pro.user_name,
            "email": pro.email
        }
        # Generate access token using the dictionary as identity
        token = create_access_token(identity=identity)
        return jsonify(access_token=token), 200
    
    return jsonify({"message": "User not found: invalid Email or Password"}), 404



# AUTHENTICATION - get user data
@api.route("/authentication", methods=["GET"])
@jwt_required()
def pro_authentication():  
    current_user = get_jwt_identity()
    
    if current_user:
        return jsonify(current_user)
    

# User List - get all users
@api.route("/users", methods=["GET"])
def get_users():
    # call db table /pro
    users_array = Users.query.all()

    # Serializza la lista di utenti in un formato JSON e restituiscila
    users = [{"id": user.id, "user_name": user.user_name, "email": user.email} for user in users_array]
    return jsonify(users)




##########################################################
##########################################################











