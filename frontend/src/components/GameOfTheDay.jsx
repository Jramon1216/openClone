import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

/**
 *  TODO: turn this component from game of the day to featured game
 *
 */

export default function GameOfTheDay() {
  const [game, setGame] = useState({});

  const data = {
    name: "Hades",
    firstReleaseDate: "2020-09-17T00:00:00Z",
    tier: "Mighty",
    Platforms: [
      "PC",
      "Nintendo Switch",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
    ],
  };

  useEffect(()=>{
    setGame(data)      
    },[])

  // const fetchGOTD = async() => {
  //     const url = "http://127.0.0.1:8000/game-of-the-day"
  //     try {
  //         axios.get(url)
  //         .then((response) =>
  //             console.log(response.data)

  //         )

  //     } catch(e) {
  //         throw new Error(`Error fetching from openClone API: ${e}`)
  //     }
  // }
  // useEffect(() => {
  //     fetchGOTD()
  // }, [])

  return (
    <>
      <h1> Featured Game </h1>
      <h3>{game.name}</h3>
      <h4>Released on: {moment(game.firstReleaseDate).format('MMMM Do YYYY')}</h4>
      <h4>Tier: {game.tier}</h4>
      <h4>Available On: {game.Platforms.join(", ")} </h4>
    </>
  );
}
