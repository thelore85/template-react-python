"""empty message

Revision ID: a38e1c09676d
Revises: f08ca2f180f7
Create Date: 2024-02-18 16:55:25.527763

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a38e1c09676d'
down_revision = 'f08ca2f180f7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('pro',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=100), nullable=True),
    sa.Column('password', sa.String(length=100), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.drop_table('User')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('User',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('name', sa.VARCHAR(length=50), nullable=False),
    sa.Column('email', sa.VARCHAR(length=100), nullable=False),
    sa.Column('password', sa.VARCHAR(length=100), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('pro')
    # ### end Alembic commands ###
