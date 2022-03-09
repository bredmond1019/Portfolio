
import graphene
from flask_graphql_auth import create_access_token, create_refresh_token

from climbr import db
from ..graphql.objects import UserObject as User, ProfileObject as Profile, SkillInput
from ..models import User as UserModel, Profile as ProfileModel, Skill as SkillModel


class UserMutation(graphene.Mutation):
    class Arguments:
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    user = graphene.Field(lambda: User)

    def mutate(self, info, email, password):
        user = UserModel(
            email=email, password=password, role_id=2)

        db.session.add(user)
        db.session.commit()

        return UserMutation(user=user)


class ProfileMutation(graphene.Mutation):
    class Arguments:
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        user_id = graphene.Int(required=True)
        preferred_style_climbing = graphene.String()
        skills = graphene.List(SkillInput)

    profile = graphene.Field(lambda: Profile)

    def mutate(self, info, first_name, last_name, user_id, preferred_style_climbing, skills):
        user = UserModel.query.get(user_id)

        profile = ProfileModel(first_name=first_name, last_name=last_name,
                               preferred_style_climbing=preferred_style_climbing)

        skill_list = [SkillModel(
            name=input_skill.name,
            preferred_skill=input_skill.preferred_skill) for input_skill in skills]

        profile.skills.extend(skill_list)

        db.session.add(profile)

        user.profile = profile
        db.session.commit()

        return ProfileMutation(profile=profile)


class AuthMutation(graphene.Mutation):
    access_token = graphene.String()
    refresh_token = graphene.String()

    class Arguments:
        email = graphene.String()
        password = graphene.String()

    def mutate(self, info, email, password):
        user = UserModel.query.filter_by(
            email=email, password=password).first()
        print(user)
        if not user:
            raise Exception(
                'Authentication Failure : User is not registered')

        return AuthMutation(
            access_token=create_access_token(email),
            refresh_token=create_refresh_token(email)
        )


class Mutation(graphene.ObjectType):
    mutate_user = UserMutation.Field()
    mutate_profile = ProfileMutation.Field()
    mutate_auth = AuthMutation.Field()
