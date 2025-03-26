import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import '../styles/gameOfTheDayStyle.css'

const apiURL = import.meta.env.VITE_API_URL
// TODO: change naming of function from GameOfTheDay to Featured Game

export default function GameOfTheDay() {
  const [game, setGame] = useState({
    name: "",
    firstReleaseDate: "",
    tier: "",
    Platforms: [],
  });

  const fetchGOTD = async() => {
      const url = apiURL +"/top-five"
      try {
        const response = await axios.get(url);
        console.log(response.data)
      } catch(e) {
          throw new Error(`Error fetching from openClone API: ${e}`)
      }
  }
  
  useEffect(() => {
      fetchGOTD()
  }, [])

  return (
    <div id="game-card">
      <h1> Featured Game </h1>
      <h3>{game.name}</h3>
      <h4>Released on: {moment(game.firstReleaseDate).format('MMMM Do YYYY')}</h4>
      <h4>Tier: {game.tier}</h4>
      <h4>Available On: {game.Platforms.join(", ")} </h4>
    </div>
  );
}
