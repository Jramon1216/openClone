import { useState, useEffect } from "react";
import "../styles/topFiveGamesStyle.css"

export default function TopFiveGames() {
    const [games, setGames] = useState([]);
    
    
    const data = [
  {
    "name": "Split Fiction",
    "id": 18192,
    "tier": "Mighty",
    "images": {
      "banner": {
        "og": "game/18192/o/ok7JJaeB.jpg",
        "sm": "game/18192/s5CFS88j.jpg"
      },
      "box": {
        "og": "game/18192/o/N3LM8Kn2.jpg",
        "sm": "game/18192/bNdwbsxd.jpg"
      }
    },
    "Platforms": [
      {
        "display_release": null,
        "id": 2,
        "image_src": null,
        "name": "Xbox Series X/S",
        "releaseDate": "2025-03-06T00:00:00Z",
        "shortName": "XBXS"
      },
      {
        "display_release": null,
        "id": 3,
        "image_src": null,
        "name": "PlayStation 5",
        "releaseDate": "2025-03-06T00:00:00Z",
        "shortName": "PS5"
      },
      {
        "display_release": null,
        "id": 27,
        "image_src": null,
        "name": "PC",
        "releaseDate": "2025-03-06T00:00:00Z",
        "shortName": "PC"
      }
    ],
    "topCriticScore": 90
  },
  {
    "name": "Kingdom Come: Deliverance II",
    "id": 17486,
    "tier": "Mighty",
    "images": {
      "banner": {
        "og": "game/17486/o/lrpR5ukY.jpg",
        "sm": "game/17486/5oVfdQ0u.jpg"
      },
      "box": {
        "og": "game/17486/o/qVSuGQwO.jpg",
        "sm": "game/17486/hwCyWe6h.jpg"
      }
    },
    "Platforms": [
      {
        "display_release": null,
        "id": 27,
        "image_src": null,
        "name": "PC",
        "releaseDate": "2025-02-04T00:00:00Z",
        "shortName": "PC"
      },
      {
        "display_release": null,
        "id": 3,
        "image_src": null,
        "name": "PlayStation 5",
        "releaseDate": "2025-02-04T00:00:00Z",
        "shortName": "PS5"
      },
      {
        "display_release": null,
        "id": 2,
        "image_src": null,
        "name": "Xbox Series X/S",
        "releaseDate": "2025-02-04T00:00:00Z",
        "shortName": "XBXS"
      }
    ],
    "topCriticScore": 89
  },
  {
    "name": "Monster Hunter Wilds",
    "id": 17483,
    "tier": "Mighty",
    "images": {
      "banner": {
        "og": "game/17483/o/EDmHE6BC.jpg",
        "sm": "game/17483/jBQnLf0K.jpg"
      },
      "box": {
        "og": "game/17483/o/bVURBOF2.jpg",
        "sm": "game/17483/Mg0PCGP4.jpg"
      }
    },
    "Platforms": [
      {
        "display_release": null,
        "id": 27,
        "image_src": null,
        "name": "PC",
        "releaseDate": "2025-02-27T00:00:00Z",
        "shortName": "PC"
      },
      {
        "display_release": null,
        "id": 3,
        "image_src": null,
        "name": "PlayStation 5",
        "releaseDate": "2025-02-27T00:00:00Z",
        "shortName": "PS5"
      },
      {
        "display_release": null,
        "id": 2,
        "image_src": null,
        "name": "Xbox Series X/S",
        "releaseDate": "2025-02-27T00:00:00Z",
        "shortName": "XBXS"
      }
    ],
    "topCriticScore": 89
  },
  {
    "name": "Keep Driving",
    "id": 18083,
    "tier": "Mighty",
    "images": {
      "banner": {
        "og": "game/18083/o/g9AmZntA.jpg",
        "sm": "game/18083/vLzgw9nw.jpg"
      },
      "box": null
    },
    "Platforms": [
      {
        "display_release": null,
        "id": 27,
        "image_src": null,
        "name": "PC",
        "releaseDate": "2025-02-06T00:00:00Z",
        "shortName": "PC"
      }
    ],
    "topCriticScore": 89
  },
  {
    "name": "Ever 17: The Out of Infinity",
    "id": 18166,
    "tier": "Mighty",
    "images": {
      "banner": {
        "og": "game/18166/o/mZSPRsvR.jpg",
        "sm": "game/18166/yUuyzJgu.jpg"
      },
      "box": null
    },
    "Platforms": [
      {
        "display_release": null,
        "id": 27,
        "image_src": null,
        "name": "PC",
        "releaseDate": "2025-03-06T00:00:00Z",
        "shortName": "PC"
      },
      {
        "display_release": null,
        "id": 6,
        "image_src": null,
        "name": "PlayStation 4",
        "releaseDate": "2025-03-06T00:00:00Z",
        "shortName": "PS4"
      },
      {
        "display_release": null,
        "id": 32,
        "image_src": null,
        "name": "Nintendo Switch",
        "releaseDate": "2025-03-06T00:00:00Z",
        "shortName": "Switch"
      }
    ],
    "topCriticScore": 86
  }
]
    useEffect(()=> {
        setGames(data);
    },[])

  return (
    <>
        <h1>Top five highly rated games this year</h1>
        <div>
          <ul id="top-five-container">
              {
                  games.map((game, index) => (
                      <li key={index} className="top-five-game">
                          <p>{game.name}</p>
                          <p>{game.tier}</p>
                          <p>
                              {game.Platforms.map(p=> p.shortName).join(", ")}
                          </p>
                          
                          <p>
                              {game.topCriticScore}
                          </p>
                      </li>
                  ))
              }
          </ul>
        </div>
    </>
  );
}
