from flask import jsonify, request
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

import jwt
import os
from api.model import db, Users
import bcrypt
from time import time



# Generate reset token
def generate_reset_token(user):
    print('Reset psw: reset token generation')
    expires=500
    secret_key = os.getenv('SECRET_KEY_FLASK')
    if secret_key is None:
        raise ValueError("SECRET_KEY_FLASK not set correctly")

    # Generate temporary token for psw reset
    token = jwt.encode({'email': user.email, 'reset_password': user.user_name, 'exp': time() + expires}, key=secret_key)
    return token


# 
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
    

# Check if reset toke is still valid and if match en existing user 
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

