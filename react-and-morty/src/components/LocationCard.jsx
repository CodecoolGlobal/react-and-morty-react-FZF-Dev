function LocationCard(props) {
    return (
        <div className="LocationCard">
            <img className="locAvatar" src={props.images} alt="location avatar"></img>
            <div className="locationData">{`Name: ${props.location.name}`}</div>
            <div className="locationData">{`Type: ${props.location.type}`}</div>
            <div className="locationData">{`Dimension: ${props.location.dimension}`}</div>
        </div>
    );
}

export default LocationCard;