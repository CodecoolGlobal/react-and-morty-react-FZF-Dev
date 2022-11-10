import './Characters.css';
import CharacterCard from './CharacterCard';
import { useEffect, useState, useRef } from 'react';
import { characters } from '../api/dataRoutes';

function Characters(props) {
    const [charactersPageNumber, setCharactersPageNumber] = useState(1);
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
        const controller = new AbortController();
        fetch(`${characters}${charactersPageNumber}`, {signal: controller.signal})
            .then(res => res.json())
            .then(function (res) {
                setCharacterData((current) => [...current, ...res.results]);
            })
        return () => {controller.abort()};
    }, [charactersPageNumber]);

    return (
        <div id="Characters">
            <div id="characterCardContainer">
                {characterData.map((character) => {
                    return (
                        <div key={character.id} ref={setLastElement}>
                            <CharacterCard
                                character={character}
                                setPopupDisplay={props.setPopupDisplay}
                                setPopupDisplayData={props.setPopupDisplayData}
                            />
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
}

export default Characters;
