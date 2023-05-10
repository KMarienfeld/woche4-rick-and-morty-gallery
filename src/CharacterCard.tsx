import React from 'react';
import allCharacters from './allCharacters.json'
import './CharacterCard.css'

type CharacterCardsProps = {
    name: string,
    image: string,
    status: string
}
function CharacterCard(props:CharacterCardsProps) {
    return (
        <div className={"character-card"}>
            <div className={props.status == "Alive"? "alive" : props.status == "Dead"? "dead" : "unknown" }>
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.name}/>
            <p>{props.status}</p>
            </div>
        </div>
    );
}

export default CharacterCard;