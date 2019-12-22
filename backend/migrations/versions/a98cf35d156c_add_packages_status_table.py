"""add packages status table

Revision ID: a98cf35d156c
Revises: 5911ed368326
Create Date: 2019-12-22 21:26:56.344795

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a98cf35d156c'
down_revision = '5911ed368326'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('status',
    sa.Column('describe', sa.Enum('千克', '件', '托', '箱', '只', '支', '组', '卷', '立方米', '平方米'), nullable=False),
    sa.PrimaryKeyConstraint('describe')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('status')
    # ### end Alembic commands ###
