
import unittest
from doggo import db
from doggo.models import User
from test_basic import BasicsTestCase


class UserModelTestCase(BasicsTestCase):
    def test_password_setter(self):
        u = User(email='hello@gmail.com',
                 password='dog')
        self.assertTrue(
            u.password_hash is not None)

    def test_no_password_getter(self):
        u = User(email='hello@gmail.com',
                 password='dog')
        with self.assertRaises(AttributeError):
            u.password

    def test_password_verification(self):
        u = User(email='hello@gmail.com',
                 password='dog')
        self.assertTrue(u.verify_password('dog'))
        self.assertFalse(u.verify_password('cat'))

    def test_password_salts_are_random(self):
        u = User(email='hello@gmail.com',
                 password='dog')
        u2 = User(email='hi@gmail.com',
                  password='dog')
        self.assertTrue(
            u.password_hash != u2.password_hash)

    def test_encode_auth_token(self):
        user = User(
            email='hello@gmail.com',
            password='dog'
        )

        db.session.add(user)
        db.session.commit()
        auth_token = user.encode_auth_token(
            user.id)
        self.assertTrue(isinstance(
            auth_token.encode(), bytes))
        self.assertTrue(
            User.decode_auth_token(auth_token) == 1)
