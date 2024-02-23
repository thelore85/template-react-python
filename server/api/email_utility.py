import os
import smtplib
from api.model import Users  # Assicurati che il percorso sia corretto


def send_recovery_email(user):
    # Genera il token per il recupero della password
    token = user.get_reset_token()

    # Parametri SMTP
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587
    smtp_username = os.getenv("EMAIL")
    smtp_password = os.getenv("PSW")

    # Informazioni sull'email
    from_email = 'noreply@piqus.it'
    to_email = user.email  # Utilizza l'email dell'utente
    subject = 'Password Recovery'
    body = f'http://localhost:1954/#/password-setting/{token}'

    # Costruzione del messaggio
    message = f'Subject: {subject}\n\n{body}'

    # Connessione al server SMTP e invio dell'email
    with smtplib.SMTP(smtp_server, smtp_port) as smtp:
        smtp.starttls()
        smtp.login(smtp_username, smtp_password)
        smtp.sendmail(from_email, to_email, message)
