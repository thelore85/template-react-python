import os
import smtplib
from api.model import Users 


def send_recovery_email(user, token):
    

    # SMTP configuration
    smtp_server = os.getenv("EMAIL_SERVER")
    smtp_port = os.getenv("EMAIL_PORT")
    smtp_username = os.getenv("EMAIL_ACCOUNT")
    smtp_password = os.getenv("EMAIL_PSW")

    # email details
    from_email = 'noreply@piqus.it'
    to_email = user.email
    subject = 'Password Recovery'
    body = f'http://localhost:1954/#/password-setting/{token}'

    # message
    message = f'Subject: {subject}\n\n{body}'

    # SMTP connection and email dispatch
    with smtplib.SMTP(smtp_server, smtp_port) as smtp:
        smtp.starttls()
        smtp.login(smtp_username, smtp_password)
        smtp.sendmail(from_email, to_email, message)
