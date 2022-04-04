
import graphene
from flask_graphql_auth import (
    create_access_token,
    create_refresh_token,
    AuthInfoField,
    mutation_jwt_required,
    mutation_jwt_refresh_token_required,
    get_jwt_identity
)

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
            email=email, role_id=2)
        user.set_password(password)

        db.session.add(user)
        db.session.commit()

        return UserMutation(user=user)


class ProtectedProfile(graphene.Union):
    class Meta:
        types = (Profile, AuthInfoField)


class ProfileMutation(graphene.Mutation):
    class Arguments:
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        user_id = graphene.Int(required=True)
        preferred_style_climbing = graphene.String()
        skills = graphene.List(SkillInput)
        token = graphene.String()

    profile = graphene.Field(lambda: ProtectedProfile)

    @mutation_jwt_required
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
    user_id = graphene.Int()
    profile_id = graphene.Int()

    class Arguments:
        email = graphene.String()
        password = graphene.String()

    def mutate(self, info, email, password):
        user = UserModel.query.filter_by(
            email=email).first()

        print(user)
        if not user or not user.verify_password(password):
            raise Exception(
                'Authentication Failure : User credentials are incorrect')

        return AuthMutation(
            access_token=create_access_token(email),
            refresh_token=create_refresh_token(email),
            user_id=user.id,
            profile_id=user.profile_id
        )


class RefreshMutation(graphene.Mutation):
    class Arguments:
        refresh_token = graphene.String()

    new_token = graphene.String()

    @mutation_jwt_refresh_token_required
    def mutate(self):
        current_user = get_jwt_identity()
        return RefreshMutation(new_token=create_access_token(identity=current_user))


class Mutation(graphene.ObjectType):
    mutate_user = UserMutation.Field()
    mutate_profile = ProfileMutation.Field()
    mutate_auth = AuthMutation.Field()
    refresh = RefreshMutation.Field()
