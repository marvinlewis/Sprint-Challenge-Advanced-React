import React from "react";
import "./player.css";
import { useBlueBackGround } from "./useBlueBackGround";

const PlayersCard = (props) => {
    const [ blue,setBlue] = useBlueBackGround(false);
    //console.log(props.player);
    const handleClick = () => {
        setBlue(!blue);
    }

    return(
        <div>
            <p>{props.player.name}</p>
            <p>{props.player.country}</p>
            <button onClick={handleClick}> blue </button>
        </div>
    )
    }

export default PlayersCard;