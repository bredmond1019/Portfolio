"""empty message

Revision ID: d86e703bc5be
Revises: f3e824a4efd7
Create Date: 2020-10-30 23:36:56.853873

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'd86e703bc5be'
down_revision = 'f3e824a4efd7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('posts', sa.Column('timestamp', sa.DateTime(), nullable=True))
    op.create_index(op.f('ix_posts_timestamp'), 'posts', ['timestamp'], unique=False)
    op.drop_index('ix_posts_timestampt', table_name='posts')
    op.drop_column('posts', 'timestampt')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('posts', sa.Column('timestampt', postgresql.TIMESTAMP(), autoincrement=False, nullable=True))
    op.create_index('ix_posts_timestampt', 'posts', ['timestampt'], unique=False)
    op.drop_index(op.f('ix_posts_timestamp'), table_name='posts')
    op.drop_column('posts', 'timestamp')
    # ### end Alembic commands ###
