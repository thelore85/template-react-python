# Flask import
from flask import Blueprint, jsonify, request
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


# File import
from api.model import db, Users
from api.services.email_utility import send_recovery_email
from api.services.auth_utility import set_new_password, verify_reset_token, generate_reset_token, register_user, user_login


# blueprint setting
api = Blueprint('api', __name__)



##########################################################
# End points


@api.route('/new-password', methods=['PUT'])
def new_password_setting():
    token = request.headers.get('Authorization') # Ottenere il token dall'header Authorization
    return set_new_password(token)



@api.route('/verify-reset-token', methods=['POST'])
def verify_reset_token_endpoint():
    token = request.json.get('token')
    return verify_reset_token(token)



@api.route('/recovery-email', methods=['POST'])
def send_token_reset_email():
    email = request.json.get('email')
    user = Users.query.filter_by(email = email).first()
    if user:
        token = generate_reset_token(user)
        send_recovery_email(user, token)
        return 'Email sent successfully', 200
    else:
        return 'Invalid email provided', 400



@api.route("/signup", methods=['POST'])
def signup():
    user_name = request.json.get("userName", None) 
    email = request.json.get("email", None) 
    password = request.json.get("password", None)

    success, message = register_user(user_name, email, password)
    if success:
        return jsonify({"message": message}), 200
    else:
        return jsonify({"message": message}), 401



@api.route("/login", methods=['POST'])
def login():
    email = request.json.get("email")
    password = request.json.get("password")
    password_bytes = password.encode('utf-8') if password is not None else None #conver string in byte string

    return user_login(email, password_bytes)



@api.route("/authentication", methods=["GET"])
@jwt_required()
def pro_authentication():  
    current_user = get_jwt_identity()
    print('running authentication', current_user)
    
    if current_user:
        return jsonify(current_user)



@api.route("/users", methods=["GET"])
def get_users():
    # call db table /pro
    users_array = Users.query.all()

    # Serializza la lista di utenti in un formato JSON e restituiscila
    users = [{"id": user.id, "user_name": user.user_name, "email": user.email} for user in users_array]
    return jsonify(users)



##########################################################
##########################################################











