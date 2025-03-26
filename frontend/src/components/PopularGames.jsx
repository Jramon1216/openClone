import { useState, useEffect } from "react";
import "../styles/popularGamesStyle.css";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

export default function PopularGames() {
  const [popularGames, setPopularGames] = useState([]);

  const fetchPG = async() => {
    const url = apiURL + '/popular-games'
    try {
      const response = await axios.get(url);
      setPopularGames(response.data)
    } catch(e) {
      throw new Error(`Error fetching from openClone API: ${e}`);
    }
  }

  useEffect(() => {
    fetchPG();
  }, []);

  function setRatingColor(rating) {
    if (rating >= 0 && rating <= 75) {
      return "#CD5C5C";
    } else if (rating >= 25 && rating <= 49) {
      return "#E9967A";
    } else if (rating >= 50 && rating <= 74) {
      return "#F0E68C";
    } else if (rating >= 75 && rating <= 100) {
      return "#3CB371";
    } else {
      return "#708090";
    }
  }

  return (
    <>
      <h1>Popular games</h1>
      <p>Based on pageviews and recent reviews on the OpenCritic website</p>
      <ul id= "pop-ul">
        {popularGames.map((popularGame, index) => (
          <li id="pop-li" key={index}>
            <div id="popular-game-container">
              <div id="critic-score-container">
                <p
                  id="critic-score"
                  style={{
                    backgroundColor: setRatingColor(
                      popularGame.top_critic_score
                    ),
                  }}
                >
                  {popularGame.top_critic_score}
                </p>
              </div>
              <div id="popular-game-info-container">
                <p
                  style={{
                    marginBottom: "0px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "black",
                    borderBottomWidth: "1px"
                  }}
                >
                  {popularGame.name}
                </p>
                <p
                  style={{
                    marginTop: "0px",
                  }}
                >
                  {popularGame.platforms.join(", ")}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
