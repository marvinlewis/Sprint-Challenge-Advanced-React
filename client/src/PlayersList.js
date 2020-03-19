import React from "react";
import PlayersCard from "./PlayersCard";

const PlayersList = (props) => {
    return (
        <div>
        {props.players.map(item => 
            <div key={item.id}>
            <PlayersCard player={item}/>
            </div>)}
        </div>

    )
}

export default PlayersList;