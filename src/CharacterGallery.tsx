import React from "react";
import allCharacters from './allCharacters.json'
import CharacterCard from "./CharacterCard";



function CharacterGallery() {
    return (
        <div className="App">
            {allCharacters.map((character) => <CharacterCard key = {character.id} name={character.name} status={character.status} image={character.image}/>)}
        </div>
    )

}
export default CharacterGallery;