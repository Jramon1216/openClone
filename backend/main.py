from fastapi import FastAPI, HTTPException
from dotenv import load_dotenv
from typing import List, Mapping
from models import HoFGame, PopGame, GOTD
from example_data_rr import data

import os
import httpx
import logging
import requests
import random

load_dotenv()

app = FastAPI(debug=True)

# Resources
RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY")
RAPIDAPI_HOST = os.getenv("RAPIDAPI_HOST")
url = f"https://{RAPIDAPI_HOST}"

headers = {
	"x-rapidapi-key": f"{RAPIDAPI_KEY}",
	"x-rapidapi-host": f"{RAPIDAPI_HOST}"
    }

endpoints = {
    "hall of fame": '/game/hall-of-fame',
    "popular": "/game/popular",
    "recently released": "/game/recently-released"
}

client = httpx.AsyncClient()

# helper function to call external API
async def get_data(endpoint: str, query_string: Mapping[str, str] = {}):
    if endpoint is None:
        raise ValueError('an valid endpoint is required for this function')
    
    try:
        if not query_string:
            response = requests.get(url + endpoint, headers=headers)
        else:
            response = requests.get(url + endpoint, headers=headers, params=query_string)
        
        response.raise_for_status
        return response.json()
    
    except Exception as e:
        raise HTTPException(status_code = e.response.status_code, detail = f"Error fetching data from rapidAPI: {e}")

# Path Operator Functions
@app.get("/top-five", response_model=list[HoFGame])
async def get_top_five() -> List[HoFGame]:
    
    try:
        hof_games = await get_data(endpoints["hall of fame"])
        return hof_games[:5] # Return a list with the top five games          
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f'Internal server error: {e}')

@app.get("/popular-games", response_model=list[PopGame])
async def get_popular_games() -> List[PopGame]:
    try:
        pop_games = await get_data(endpoints["popular"])
        transformed_data = []

        for game in pop_games:
            transformed = {
                "name": game["name"],
                "top_critic_score": round(game["topCriticScore"]),
                "platforms": [platform["shortName"] for platform in game["Platforms"]],
                "boxart" : game["images"]["box"]["og"]
            }
            transformed_data.append(transformed)
        
        
        return transformed_data
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server error: {e}")

@app.get("/game-of-the-day", response_model=GOTD)
async def get_game_of_day() -> GOTD:
    try:
        query_params = {
            "sort": "score",
            "order": "desc"
        }
        
        games = await get_data('/game', query_params)
        game = games[random.randint(0, len(games) - 1)] 
        game["Platforms"] = [platform["name"] for platform in game["Platforms"]]
        return game

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error: {e}")
    
    
