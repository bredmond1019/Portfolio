import os
import unittest
from flask import current_app
from app import create_app, db


class BasicsTestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app('testing')
        self.app_context = self.app.app_context()
        self.app_context.push()
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()
        self.app_context.pop()

    def test_app_exists(self):
        self.assertFalse(current_app is None)

    def test_app_is_testing(self):
        self.assertTrue(
            current_app.config['TESTING'])
        self.assertTrue(
            current_app.config['DEBUG'])
        self.assertTrue(current_app.config['SQLALCHEMY_DATABASE_URI']
                        == 'postgresql://brandon:Asdqwe11@localhost:5432/doggoTest')
        self.assertFalse(
            current_app.config['SECRET_KEY'] == 'does not exist')


class DevelopmentConfigTestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app('development')
        self.app_context = self.app.app_context()
        self.app_context.push()

    def tearDown(self):

        self.app_context.pop()

    def test_app_is_development(self):
        self.assertFalse(
            current_app.config['SECRET_KEY'] == 'does not exist')
        self.assertTrue(
            current_app.config['DEBUG'] is True)
        self.assertFalse(current_app is None)