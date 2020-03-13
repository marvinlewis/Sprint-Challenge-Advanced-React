import React from "react";
import "./player.css";
import { useBlueBackGround } from "./useBlueBackGround";

const PlayersCard = ({ player }) => {
    const [ blue,setBlue] = useBlueBackGround(false);
    //console.log(player);
    const handleClick = () => {
        setBlue(true);
    }

    return(
        <div>
            <p>{player.name}</p>
            <p>{player.country}</p>
            <button onClick={handleClick}> blue </button>
        </div>
    )
    }

export default PlayersCard;