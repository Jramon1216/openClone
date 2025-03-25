"""
- These models are made to validate JSON responses 
- Game is the root object
- If a model contains a field that is also a class a model must be made to support it
"""

from typing import List, Optional
from datetime import datetime
from pydantic import BaseModel, Field
from enum import Enum


aliases = {
    "top_critic_score": 'topCriticScore',
    "platforms": 'Platforms',
    "first_release_date": 'firstReleaseDate',
    "short_name": "shortName",
    "image_src": "imageSrc",
    "platform_id":"_id",
    "release_date": "releaseDate",
}


class Tier(str, Enum):
   MIGHTY = "Mighty"
   STRONG = "Strong"

class Banner(BaseModel):
    og: str
    sm: str

class Box(BaseModel):
    og: str
    sm: str
   
class Images(BaseModel):
    banner: Banner
    box: Optional[Banner] = None

class Platform(BaseModel):
    display_release: Optional[datetime] = None
    id: int
    image_src: Optional[str] = None
    name: str
    release_date: datetime = Field(alias=aliases["release_date"])
    short_name: str = Field(alias = aliases["short_name"])


class Game(BaseModel): # Root object
    first_release_date: datetime = Field(alias = aliases["first_release_date"])
    id: int
    images: Images
    name: str
    platforms: List[Platform] = Field(alias = aliases["platforms"])
    tags: List[str] 
    tier: Tier
    top_critic_score: int = Field(alias = aliases["top_critic_score"])

"""
 ~~~~~~~~~~~~~~~~~~~~~~~~  vv Models for path operation functions vv ~~~~~~~~~~~~~~~~~~~~~~~~
"""

class HoFGame(BaseModel): # Model for the /hall-of-fame endpoint
    name: str
    id: int
    tier: Tier
    images: Images # box art
    platforms: List[Platform] = Field(alias  = aliases["platforms"])
    top_critic_score: int = Field(alias = aliases["top_critic_score"]) #top score

class PopGame(BaseModel): # Model for the /popular endpoint
    name: str
    top_critic_score: int  
    platforms: List[str] 
    boxart: str 
    
