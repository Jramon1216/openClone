import { useState, useEffect } from "react";

export default function PopularGames(){
    const [popularGames, setPopularGames] = useState([]);

    useEffect(() => {
      const data = [
        {
          name: "Assassin's Creed Shadows",
          top_critic_score: 81,
          platforms: ["PS5", "PC", "XBXS"],
          boxart: "game/16792/o/4E9fns0M.jpg",
        },
        {
          name: "Atomfall",
          top_critic_score: 74,
          platforms: ["PS5", "PS4", "XBXS", "XB1", "PC"],
          boxart: "game/17764/o/CR4hlpUm.jpg",
        },
        {
          name: "Split Fiction",
          top_critic_score: 90,
          platforms: ["XBXS", "PS5", "PC"],
          boxart: "game/18192/o/N3LM8Kn2.jpg",
        },
        {
          name: "The First Berserker: Khazan",
          top_critic_score: 80,
          platforms: ["PC", "PS5", "XBXS"],
          boxart: "game/17884/o/HCxnw3vX.jpg",
        },
        {
          name: "Atelier Yumia: The Alchemist of Memories & the Envisioned Land",
          top_critic_score: 80,
          platforms: ["PS5", "PS4", "XBXS", "XB1", "Switch", "PC"],
          boxart: "game/17763/o/otCQ9o5Y.jpg",
        },
        {
          name: "WWE 2K25",
          top_critic_score: 79,
          platforms: ["PC", "PS5", "XBXS", "PS4", "XB1"],
          boxart: "game/18048/o/HGsNCfLB.jpg",
        },
        {
          name: "Monster Hunter Wilds",
          top_critic_score: 89,
          platforms: ["PC", "PS5", "XBXS"],
          boxart: "game/17483/o/bVURBOF2.jpg",
        },
        {
          name: "Wanderstop",
          top_critic_score: 80,
          platforms: ["XBXS", "PS5", "PC"],
          boxart: "game/18213/o/qG8dnvlo.jpg",
        },
        {
          name: "Two Point Museum",
          top_critic_score: 84,
          platforms: ["PC", "PS5", "XBXS"],
          boxart: "game/17484/o/qrOJJSY1.jpg",
        },
        {
          name: "Like a Dragon: Pirate Yakuza in Hawaii",
          top_critic_score: 81,
          platforms: ["PS5", "PS4", "XBXS", "XB1", "PC"],
          boxart: "game/17748/o/87xqCRrR.jpg",
        },
        {
          name: "Avowed",
          top_critic_score: 80,
          platforms: ["XBXS", "PC"],
          boxart: "game/17747/o/v4f9GoK1.jpg",
        },
        {
          name: "Tomb Raider IV-VI Remastered",
          top_critic_score: 69,
          platforms: ["PS5", "PS4", "XBXS", "XB1", "Switch", "PC"],
          boxart: "game/17745/o/GG7XAitu.jpg",
        },
        {
          name: "Sorry, We're Closed",
          top_critic_score: 82,
          platforms: ["PC"],
          boxart: "game/17662/o/SOR4nBgW.jpg",
        },
        {
          name: "Everhood 2",
          top_critic_score: 78,
          platforms: ["Switch", "PC"],
          boxart: "game/18024/o/AX4GgMxk.jpg",
        },
        {
          name: "Sid Meier's Civilization VII",
          top_critic_score: 80,
          platforms: ["PS5", "PS4", "XBXS", "XB1", "Switch", "PC"],
          boxart: "game/17742/o/Xaf8evcM.jpg",
        },
        {
          name: "Kingdom Come: Deliverance II",
          top_critic_score: 89,
          platforms: ["PC", "PS5", "XBXS"],
          boxart: "game/17486/o/qVSuGQwO.jpg",
        },
        {
          name: "PGA TOUR 2K25",
          top_critic_score: 81,
          platforms: ["PC", "PS5", "XBXS"],
          boxart: "game/18046/o/k9Kp4bCA.jpg",
        },
        {
          name: "FragPunk",
          top_critic_score: 75,
          platforms: ["PC", "XBXS", "PS5"],
          boxart: "game/17883/o/38rt2RFh.jpg",
        },
        {
          name: "KAISERPUNK",
          top_critic_score: 65,
          platforms: ["PC"],
          boxart: "game/18273/o/skoBatQs.jpg",
        },
        {
          name: "Rise of the Ronin",
          top_critic_score: 77,
          platforms: ["PS5"],
          boxart: "game/16053/o/0X3SuYIT.jpg",
        },
        {
          name: "MULLET MADJACK",
          top_critic_score: 87,
          platforms: ["PC"],
          boxart: "game/16689/o/gVIRVSCX.jpg",
        },
        {
          name: "Dark Deity 2",
          top_critic_score: -1,
          platforms: ["PC"],
          boxart: "game/18280/o/06Nvm4a5.jpg",
        },
        {
          name: "Urban Myth Dissolution Center",
          top_critic_score: 80,
          platforms: ["PS5", "Switch", "PC"],
          boxart: "game/17804/o/fl363Uig.jpg",
        },
        {
          name: "KinnikuNeko: SUPER MUSCLE CAT",
          top_critic_score: -1,
          platforms: ["PC", "XBXS", "PS5", "PS4", "Switch"],
          boxart: "game/16641/o/Bwhmg5ki.jpg",
        },
        {
          name: "Rogue Waters",
          top_critic_score: 82,
          platforms: ["PC", "Switch", "PS5", "XBXS"],
          boxart: "game/17395/o/XNk9muQa.jpg",
        },
      ];
        setPopularGames(data);  
    }, [])

    return (
      /**
          name: "Assassin's Creed Shadows",
          top_critic_score: 81,
          platforms: ["PS5", "PC", "XBXS"],
          boxart: "game/16792/o/4E9fns0M.jpg",
         */
      <>
        <h1>Popular games</h1>
        <p>Based on pageviews and recent reviews on the OpenCritic website</p>
        <ul>
          {popularGames.map((popularGame, index) => (
            <li>
              <p>{popularGame.name}</p>
              <p>{popularGame.top_critic_score > 1 ? popularGame.top_critic_score : "Not enough ratings from critics" }</p>
              <p>
                {popularGame.platforms.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
}