from flask import jsonify, request
from flask_jwt_extended import create_access_token


import jwt
import os
from api.model import db, Users
import bcrypt
from time import time



#LOGIN
def user_login(email, password):
    pro = Users.query.filter_by(email=email).first()

    #check if psw match    
    if pro and bcrypt.checkpw(password, pro.password):
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



# SIGNUP: New User creation
def register_user(user_name, email, password):
    password_bytes = password.encode('utf-8')
    hashed_password = bcrypt.hashpw(password_bytes, bcrypt.gensalt())

    existing_user = Users.query.filter_by(email=email).first()
    if existing_user:
        return False, "User already exists"

    if not (email and password and user_name):
        return False, "Invalid Email, Password, or Username"

    if len(password) < 6:
        return False, "Password must be at least 6 characters long"

    new_user = Users(user_name=user_name, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return True, "User registered successfully"



# PSW TOKEN: Generate reset token
def generate_reset_token(user):
    print('Reset psw: reset token generation')
    expires=500
    secret_key = os.getenv('SECRET_KEY_FLASK')
    if secret_key is None:
        raise ValueError("SECRET_KEY_FLASK not set correctly")

    # Generate temporary token for psw reset
    token = jwt.encode({'email': user.email, 'reset_password': user.user_name, 'exp': time() + expires}, key=secret_key)
    return token


# PSW TOKEN CHECK: Check if reset toke is still valid and if match en existing user 
def verify_reset_token(token):
    if not token:
        return jsonify({"error": "Missing Token"}), 400

    try:
        payload = jwt.decode(token, key=os.getenv('SECRET_KEY_FLASK'), algorithms=["HS256"])
        user_email = payload.get('email')
        user = Users.query.filter_by(email=user_email).first()

        if user:
            return jsonify(user.serialized()), 200
        else:
            return jsonify({"error": "User not found"}), 404

    except jwt.ExpiredSignatureError:
        return jsonify({"error": "Token expired"}), 400
    except jwt.InvalidTokenError:
        return jsonify({"error": "Token invalid"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# UPDATE PSW: Update psw in the user table record
def set_new_password(token):
    if not token:
        return jsonify({"error": "Missing Token"}), 400
    
    token = token.split()[1]

    try:
        payload = jwt.decode(token, key=os.getenv('SECRET_KEY_FLASK'), algorithms=["HS256"])
        user_email = payload.get('email')

        email = request.json.get('email')
        new_password = request.json.get('password')
        new_password_bytes = new_password.encode('utf-8') if new_password is not None else None # Convert string to byte string

        if user_email != email:
            return jsonify({"error": "Email in the token don't match email provided"}), 400

        user = Users.query.filter_by(email=email).first()
        if user:
            hashed_password = bcrypt.hashpw(new_password_bytes, bcrypt.gensalt())
            user.password = hashed_password
            db.session.commit()
            return jsonify({'message': 'Password updated successfully'}), 200
        else:
            return jsonify({'error': 'User not found'}), 404

    except jwt.ExpiredSignatureError:
        return jsonify({"error": "Token expired"}), 400
    except jwt.InvalidTokenError:
        return jsonify({"error": "Token invalid"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    


