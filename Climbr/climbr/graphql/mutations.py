import graphene

from climbr import db
from ..graphql.objects import UserObject as User
from ..models import User as UserModel


class UserMutation(graphene.Mutation):
    class Arguments:
        email = graphene.String(required=True)

    user = graphene.Field(lambda: User)

    def mutate(self, info, email):
        user = UserModel(email=email, role_id=2)

        db.session.add(user)
        db.session.commit()

        return UserMutation(user=user)


class Mutation(graphene.ObjectType):
    mutate_user = UserMutation.Field()
