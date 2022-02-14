import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType


from ..models import Profile as ProfileModel, \
    Skill as SkillModel, \
    User as UserModel, \
    Role as RoleModel


class RoleObject(SQLAlchemyObjectType):
    class Meta:
        model = RoleModel
        interfaces = (relay.Node, )


class UserObject(SQLAlchemyObjectType):
    user_id = graphene.Int(source='id')

    class Meta:
        model = UserModel
        interfaces = (relay.Node, )
        exclude_fields = ("role_id")


class ProfileObject(SQLAlchemyObjectType):
    class Meta:
        model = ProfileModel
        interface = (relay.Node, )

    skills = graphene.List(lambda: SkillObject, name=graphene.String(
    ), can_lead=graphene.Boolean())

    def resolve_skills(self, info, name=None, can_lead=False):
        query = SkillObject.get_query(info=info)
        query = query.filter(
            SkillModel.profile_id == self.id)
        if name:
            query = query.filter(SkillModel.name == name)
        if can_lead:
            query = query.filter(
                SkillModel.can_lead == can_lead)

        return query.all()


class SkillObject(SQLAlchemyObjectType):
    class Meta:
        model = SkillModel
        interface = (relay.Node, )


class SkillInput(graphene.InputObjectType):
    name = graphene.String()
    preferred_skill = graphene.Boolean()
