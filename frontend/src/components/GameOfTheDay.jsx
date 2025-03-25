import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

/**
 *  TODO: turn this component from game of the day to featured game
 *
 */

export default function GameOfTheDay() {
  const [title, setTitle] = useState("");
  const [firstReleaseDate, setFirstReleaseDate] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [boxart, setBoxart] = useState("");

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
        setTitle(data.name)
        setFirstReleaseDate(
            moment(data.firstReleaseDate).format('MMMM Do YYYY')
        )
        setPlatforms(data.Platforms)
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
      <h1 >Game of the day</h1>
      <p>{title}</p>
      <p>{firstReleaseDate}</p>
      <ul>
        {platforms.map((platform, index) => (
          <li key={index}>{platform}</li>
        ))}
      </ul>
    </>
  );
}
