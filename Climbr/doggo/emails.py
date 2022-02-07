from flask.templating import render_template
from flask_mail import Message
from flask import current_app
from doggo import mail
from threading import Thread


def send_async_email(app, msg):
    with app.app_context():
        mail.send(msg)


def send_email(to, subject, template, **kwargs):
    msg = Message(
        current_app.config['DOGGO_MAIL_SUBJECT_PREFIX'] + subject,
        sender=current_app.config['MAIL_USERNAME'],
        recipients=[to]
    )
    print(current_app.config['DOGGO_MAIL_SUBJECT_PREFIX'] + subject,
          current_app.config['MAIL_USERNAME'],
          current_app.config['MAIL_PASSWORD'],
          to)

    msg.body = render_template(
        f"{template}.txt", **kwargs)
    msg.html = render_template(
        f'{template}.html', **kwargs)
    thr = Thread(target=send_async_email, args=[
                 current_app._get_current_object(), msg])
    thr.start()
