from fastapi import FastAPI, HTTPException , Depends, status
from pydantic import BaseModel
from typing import Annotated
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

#creating pydantic models
#used for data validation

class UserBase(BaseModel):
    email:str
    username:str


#creating depedancy for the db
def get_db():
    db= SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]


#endpoint to create new user
@app.post("/users/", status_code=status.HTTP_201_CREATED)
async def create_user(user: UserBase, db : Session = Depends(get_db)):
    db_user = models.User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user