import './Characters.css';
import CharacterCard from './CharacterCard';
import { useEffect, useState, useRef } from 'react';
import { characters } from '../api/dataRoutes';

function Characters(props) {
    const [charactersPageNumber, setCharactersPageNumber] = useState(1);
    const [charactersDisplay, setCharactersDisplay] = useState("Loading...");
    const [characterData, setCharacterData] = useState([]);
    const [lastElement, setLastElement] = useState(null);

    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting) {
                    setCharactersPageNumber((no) => no + 1);
                }
            })
    );

    useEffect(() => {
        const currentElement = lastElement;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [lastElement]);


    useEffect(() => {
        fetch(`${characters}${charactersPageNumber}`)
            .then(res => res.json())
            .then(function (res){
                setCharacterData([...characterData,...res.results])
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [charactersPageNumber]);

    useEffect(()=>{
        setCharactersDisplay(
            characterData.map((character) => {
                            return (
                                <div key={character.id} ref={setLastElement}>
                                    <CharacterCard
                                        key={character.id} 
                                        character={character} 
                                        setPopupDisplay={props.setPopupDisplay}
                                        setPopupDisplayData={props.setPopupDisplayData}
                                    /> 
                                </div> 
                            )
                        })
                    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [characterData])


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