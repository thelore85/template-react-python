import os
import smtplib
from api.model import Users 


def send_recovery_email(user_email, token):
    
    user = Users.query.filter_by(email=user_email).first()
    if not user:
        return False, "User email invalid"

    # SMTP configuration
    smtp_server = os.getenv("EMAIL_SERVER")
    smtp_port = os.getenv("EMAIL_PORT")
    smtp_username = os.getenv("EMAIL_ACCOUNT")
    smtp_password = os.getenv("EMAIL_PSW")

    # Global variables
    front_url = os.getenv("FRONT_URL")

    # email details
    from_email = 'noreply@piqus.it'
    to_email = user.email
    subject = 'Password Recovery'
    body = f'{front_url}/password-setting?token={token}'

    # message
    message = f'Subject: {subject}\n\n{body}'

    # SMTP connection and email dispatch
    with smtplib.SMTP(smtp_server, smtp_port) as smtp:
        smtp.starttls()
        smtp.login(smtp_username, smtp_password)
        smtp.sendmail(from_email, to_email, message)
