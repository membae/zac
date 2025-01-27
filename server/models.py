from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin
metadata=MetaData()
db=SQLAlchemy(metadata=metadata)

class User(db.Model,SerializerMixin):
    __tablename__='users'
    
    id=db.Column(db.Integer,primary_key=True)
    email=db.Column(db.String,nullable=False)
    password=db.Column(db.String,nullable=False)
    
    