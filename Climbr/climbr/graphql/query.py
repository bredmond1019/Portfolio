
import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyConnectionField

from ..models import Profile as ProfileModel, \
    User as UserModel, \
    Role as RoleModel

from ..graphql.objects import UserObject as User, \
    RoleObject as Role, \
    ProfileObject as Profile \
    # SkillObject as Skill


class Query(graphene.ObjectType):
    node = relay.Node.Field()

    users = graphene.List(
        lambda: User, email=graphene.String(), user_id=graphene.Int())

    roles = graphene.List(
        lambda: Role, name=graphene.String()
    )

    profiles = graphene.List(
        lambda: Profile, id=graphene.Int()
    )

    def resolve_users(self, info, email=None):
        query = User.get_query(info)

        if email:
            query = query.filter(UserModel.email == email)
        return query.all()

    def resolve_roles(self, info, name=None):
        query = Role.get_query(info)

        if name:
            query = query.filter(RoleModel.name == name)
        return query.all()

    def resolve_profiles(self, info, id=None):
        query = Profile.get_query(info)

        if id:
            query = query.filter(
                ProfileModel.id == id)
        return query.all()

    all_users = SQLAlchemyConnectionField(User.connection)
    all_roles = SQLAlchemyConnectionField(Role.connection)
