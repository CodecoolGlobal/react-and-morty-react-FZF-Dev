function CharacterCard(props) {
    return (
        <div className="CharacterCard">
            <img className="avatar" src={props.character.image} alt="character avatar"></img>
            <div className="characterData">{`Name: ${props.character.name}`}</div>
            <div className="characterData">{`Species: ${props.character.species}`}</div>
            <div className="characterData">{`Status: ${props.character.status}`}</div>
        </div>
    );
}

export default CharacterCard;