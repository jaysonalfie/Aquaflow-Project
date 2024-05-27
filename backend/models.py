from sqlalchemy import Boolean, Column, Integer, String

from database import Base

#defining model for the tables in the db

class User(Base):
    __tablename__ = 'users'

    id= Column(Integer, primary_key=True, index=True)
    email = Column(String(50), unique=True)
    username = Column(String(50), unique=True)