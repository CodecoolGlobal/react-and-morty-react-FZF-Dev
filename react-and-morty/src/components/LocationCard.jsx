import portalImg from "./images/portal.jpeg";

function LocationCard(props) {
    return (
        <div className="LocationCard">
            <img className="locAvatar" src={portalImg} alt="location avatar" onClick={
                () => {
                    props.setPopupDisplay("location");
                    props.setPopupDisplayData(props.location);
                }
            }></img>
            <div className="locationData">{`Name: ${props.location.name}`}</div>
            <div className="locationData">{`Type: ${props.location.type}`}</div>
            <div className="locationData">{`Dimension: ${props.location.dimension}`}</div>
        </div>
    );
}

export default LocationCard;