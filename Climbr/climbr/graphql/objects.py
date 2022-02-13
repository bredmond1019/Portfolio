import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType


from ..models import User as UserModel, Role as RoleModel


class UserObject(SQLAlchemyObjectType):
    class Meta:
        model = UserModel
        interfaces = (relay.Node, )
        exclude_fields = ("role_id")


class RoleObject(SQLAlchemyObjectType):
    class Meta:
        model = RoleModel
        interfaces = (relay.Node, )
