###########################################
# Main Flask Configuration and End Points #
###########################################

from flask import Flask, jsonify, request
from flask_migrate import Migrate


# file link
from api.admin import setup_admin
from api.model import db, User


app = Flask(__name__)
port = 5005
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATION"] = False
db.init_app(app)
migrate = Migrate(app, db)
setup_admin(app)


# End points
@app.route("/", methods=['GET'])
def hello_world():
    return jsonify(message=f'Server is running on port {port}')



##########################################################
# End point: /user/

@app.route("/user", methods=['GET'])
def get_admin():
    users = User.query.all()

    if users:
        response_body = {
            "message": "Admins found",
            "users": [user.serialize() for user in users]
        }
        return response_body, 200

    return jsonify({"message": "No users found"}), 404


@app.route("/user", methods=['POST'])
def post_admin():

    data = request.json
    user = User(email = data.get('email'), name = data.get('name'), password = data.get('password'))
  
    response_body = {}
    response_body['message'] = 'New user added'
    response_body['user'] = user.serialize()

    db.session.add(user)
    db.session.commit()
    print("User ID after commit:", user.id)

    return response_body, 200


# On server launch
if __name__ == "__main__":
    app.run(debug=True, port= port)
    db.create_all()


    #################################################################
#################################################################
# How to migrate tables structure changes without loosing data. eg: if I delate a column with data
# Should I create a route.py file to manage api routes?