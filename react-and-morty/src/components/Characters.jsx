import './Characters.css';
import CharacterCard from './CharacterCard';
import { useEffect, useState } from 'react';
import { characters } from '../api/dataRoutes';

function Characters(props) {
    const [charactersPageNumber, setCharactersPageNumber] = useState(1);
    const [charactersDisplay, setCharactersDisplay] = useState("Loading...");

    useEffect(() => {
        setCharactersDisplay("Loading...");
        fetch(`${characters}${charactersPageNumber}`)
            .then(res => res.json())
            .then(res => setCharactersDisplay(
                res.results.map((character) => {
                    return (
                        <CharacterCard character={character}/>
                    )
                })
            ))
    }, [charactersPageNumber]);

    return (
        <div id="Characters">
            <button onClick={() => {setCharactersPageNumber(charactersPageNumber - 1)}}>prev</button>
            <button onClick={() => {setCharactersPageNumber(charactersPageNumber + 1)}}>next</button>
            <div id="characterCardContainer">
                {charactersDisplay}
            </div>
        </div>
    );
}

export default Characters;

/*
{id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human', type: '', …}
*/