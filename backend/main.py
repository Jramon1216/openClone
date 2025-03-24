from fastapi import FastAPI, HTTPException
from dotenv import load_dotenv
from models import HoFGame
# from example_data import data as example_data

import os
import httpx
import logging

load_dotenv()

# Resources
app = FastAPI(debug=True)
RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY")
RAPIDAPI_HOST = os.getenv("RAPIDAPI_HOST")
url = f"https://{RAPIDAPI_HOST}"

headers = {
	"x-rapidapi-key": f"{RAPIDAPI_KEY}",
	"x-rapidapi-host": f"{RAPIDAPI_HOST}"
    }

@app.get("/")
async def root():
    return {"message": "Hello Worlds"}
 
@app.get("/hall-of-fame", response_model=list[HoFGame])
async def get_hall_of_fame() -> HoFGame:
    try:
        async with httpx.AsyncClient() as client:
            try:
                response = await client.get(url+ "/game/hall-of-fame", headers=headers)
                response.raise_for_status()
                data = response.json()
                return data
                         
            except httpx.HTTPStatusError as e:
                raise HTTPException(status_code=e.response.status_code, detail="Error fetching data from RapidAPI")
            
    except Exception as e:
        raise HTTPException(status_code=500, detail='yikes')


