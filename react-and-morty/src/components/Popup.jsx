import { useEffect } from "react";
import './Popup.css';
import portalImg from "./images/portal.jpeg";

function Popup(props) {
    const data = props.dataToDisplay;
    const displayMode = props.popupDisplay;

    const display = text => text ?? "unknown";

    function CharacterData(props) {
        const data = props.data;
        return (
            <p>
                Status: {display(data.status)}<br />
                Species: {display(data.species)}<br />
                Type: {display(data.type)}<br />
                Gender: {display(data.gender)}<br />
                Origin World: {display(data.origin.name)}<br />
                Current Location: {display(data.location.name)}<br />
            </p>
        )
    }

    function LocationData(props) {
        const data = props.data;


        return (
            <div id="LocationData">
                <div>
                    <p>
                        Type: {display(data.type)}<br />
                        Dimension: {display(data.dimension)}<br />
                    </p>
                </div>
            </div>
        )
    }

    

    useEffect(() => {
        window.onclick = e => { if (e.target === document.querySelector(".Popup")) props.setPopupDisplay("none") };
    }, [displayMode, props]);

    if (displayMode !== "none") {
        return (
            <div className='Popup'>
                <div id="popup-content">
                    <span id="popup-close-button" onClick={() => { props.setPopupDisplay("none"); console.log(data) }}>&times;</span>
                    <div id="popup-content-container">
                        <div>
                            <img src={data.image ? `${data.image}` : portalImg} alt="popup"></img>
                        </div>
                        <div>
                            <div id="popup-name">Name: {data.name}</div>
                            <div id="popup-details">
                                {displayMode === "character" ? <CharacterData data={data} /> : null}
                                {displayMode === "location" ? <LocationData data={data} /> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (displayMode === "none") {
        return;
    }
}

export default Popup;