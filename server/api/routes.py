# Flask import
from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


# Bcript import
import bcrypt
import jwt
import os

# File import
from api.model import db, Users
from api.email_utility import send_recovery_email


############################
# General setting
###########################

# blueprint setting
api = Blueprint('api', __name__)



##########################################################
# End points
##########################################################


@api.route('/new-password', methods=['PUT'])
def set_new_password():
    token = request.headers.get('Authorization') # Ottenere il token dall'header Authorization
    if not token:
        return jsonify({"error": "Token non fornito"}), 400
    
    token = token.split()[1]  # Assicurati che ci siano due parti separate da spazio

    try:
        payload = jwt.decode(token, key=os.getenv('SECRET_KEY_FLASK'), algorithms=["HS256"])
        user_email = payload.get('email')
        
        email = request.json.get('email')
        new_password = request.json.get('password')
        new_password_bytes = new_password.encode('utf-8') if new_password is not None else None # Convert string to byte string
        
        if user_email != email:
            return jsonify({"error": "L'email nel token non corrisponde all'email fornita"}), 400
        
        user = Users.query.filter_by(email=email).first()
        if user:
            hashed_password = bcrypt.hashpw(new_password_bytes, bcrypt.gensalt())
            user.password = hashed_password
            db.session.commit()
            return jsonify({'message': 'Password updated successfully'}), 200
        else:
            return jsonify({'error': 'User not found'}), 404

    except jwt.ExpiredSignatureError:
        return jsonify({"error": "Il token è scaduto"}), 400
    except jwt.InvalidTokenError:
        return jsonify({"error": "Token non valido"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500





@api.route('/verify-reset-token', methods=['POST'])
def verify_reset_token_endpoint():
    token = request.json.get('token')  # Assicurati che il token sia passato nel corpo della richiesta
    
    if not token:
        return jsonify({"error": "Token non fornito"}), 400

    try:
        payload = jwt.decode(token, key=os.getenv('SECRET_KEY_FLASK'), algorithms=["HS256"])
        user_email = payload.get('email')
        user = Users.query.filter_by(email=user_email).first()

        if user:
            return jsonify(user.serialized()), 200
        else:
            return jsonify({"error": "Utente non trovato"}), 404

    except jwt.ExpiredSignatureError:
        return jsonify({"error": "Il token è scaduto"}), 400
    except jwt.InvalidTokenError:
        return jsonify({"error": "Token non valido"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500



# Reset Psw: email recovery delivery
@api.route('/recovery-email', methods=['POST'])
def email_endpoint():
    email = request.json.get('email') 
    user = Users.query.filter_by(email = email).first()
    if user:
        send_recovery_email(user)
        return 'Email sent successfully', 200
    else:
        return 'Invalid email provided', 400



@api.route("/", methods=['GET'])
def hello_world():
    return jsonify({"msg": "chech the /admin/ path"}), 201


# SIGNUP
@api.route("/signup", methods=['POST'])
def signup():

    user_name = request.json.get("userName", None) 
    email = request.json.get("email", None) 
    password = request.json.get("password", None)
    password_bytes = password.encode('utf-8') if password is not None else None #conver string in byte string
    hashed = bcrypt.hashpw(password_bytes, bcrypt.gensalt())


    # Verify pro exists
    existing_pro = Users.query.filter_by(email=email).first()
    if existing_pro:
        return jsonify({"message": "Not registered: user already exists"}), 401
    
    if email == '' or password ==  '' or user_name == '':
        return jsonify({"message": "Not registered: Invalid Email or Password"}), 401
    
    if len(password) < 6:
        return jsonify({"message": "Password must be at least 6 characters long"}), 401
    

    # Create record instance
    new_pro = Users(user_name = user_name, email = email, password = hashed)

    # Add instance to the table
    db.session.add(new_pro)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 200




# LOGIN - authentication - token generation
@api.route("/login", methods=['POST'])
def login():
    email = request.json.get("email")
    password = request.json.get("password")
    password_bytes = password.encode('utf-8') if password is not None else None #conver string in byte string


    # Check if pro exists
    pro = Users.query.filter_by(email=email).first()

    #check if psw match    
    if pro and bcrypt.checkpw(password_bytes, pro.password):
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
    


# GET USER LIST - get all users
@api.route("/users", methods=["GET"])
def get_users():
    # call db table /pro
    users_array = Users.query.all()

    # Serializza la lista di utenti in un formato JSON e restituiscila
    users = [{"id": user.id, "user_name": user.user_name, "email": user.email} for user in users_array]
    return jsonify(users)




##########################################################
##########################################################











