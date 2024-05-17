from datetime import datetime, timedelta
from passlib.context import CryptContext
from sqlalchemy.orm import sessionmaker
from sqlalchemy import Boolean, Column, ForeignKey,Integer, String
import database as _database
from .database import Base
from dotenv import load_dotenv
import os


algorithm= os.getenv('ALGORITHM')

#declaring variables
pwd_context = CryptContext(schemes= ["bcrypt"], deprecated="auto")


#creating SQLAlchemy models from the Base class
class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key= True)
    email = Column(String, unique=True,
                   index=True)
    hashed_password= Column(String)
    

    #function to verify password
    def verify_password(plain_password, hashed_password):
        return pwd_context.verify(plain_password, hashed_password)
