from fastapi import FastAPI

app = FastAPI()

#function is in charge of handing requests to go to the path using the operation
@app.get("/")
async def root():
    return {"message": "Let us get this done"}