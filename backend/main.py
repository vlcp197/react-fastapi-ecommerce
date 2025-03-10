from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Mock Database
fake_db = [
    {"id": 1, "title": "Item 1", "description": "This is the first item."},
    {"id": 2, "title": "Item 2", "description": "This is the second item."},
    {"id": 3, "title": "Item 3", "description": "This is the third item."}
]


class ItemResponse(BaseModel):
    id: int
    title: str
    description: str


@app.get("/items", response_model=List[ItemResponse])
async def get_items():
    return fake_db  # Return all items


@app.get("/about")
def about():
    return {"message": "This is the About Page"}


@app.get("/contact")
def contact():
    return {"message": "This is the Contact Page"}
