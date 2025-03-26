import { useState, useEffect } from "react";
import "../styles/topFiveGamesStyle.css"
import axios from "axios";
const apiURL = import.meta.env.VITE_API_URL;


export default function TopFiveGames() {
    const [games, setGames] = useState([]);
    
    const fetchTFG = async() => {
      const url = apiURL + "/top-five"
      try {
        const response = await axios.get(url)
        setGames(response.data)
      } catch(e) {
           throw new Error(`Error fetching from openClone API: ${e}`);
      }
    }

  useEffect(()=> {
        fetchTFG()
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
