import React, {ChangeEvent, useState} from "react";
import allCharacters from './allCharacters.json'
import CharacterCard from "./CharacterCard";



function CharacterGallery() {
    const charListe = allCharacters
    const [inputFieldValue, setInputFieldValue] = useState("");
    function useTextInput(event: ChangeEvent<HTMLInputElement>) {
        setInputFieldValue(event.target.value)
    }

        const filteredList = charListe.filter((character) => character.status.includes(inputFieldValue))



    return (
        <div className="App">
        <input type="text" value={inputFieldValue} placeholder="Trage hier einen Status ein"
        onChange={useTextInput}/>
        <br/>
            {filteredList.map((character) => <CharacterCard key = {character.id} name={character.name} status={character.status} image={character.image}/>)}
        </div>
    )

}
export default CharacterGallery;