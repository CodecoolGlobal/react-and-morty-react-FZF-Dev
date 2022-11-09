import { useEffect } from "react";
import './Popup.css';

function Popup(props) {
    const data = props.dataToDisplay;
    const displayMode = props.popupDisplay;
    
    useEffect(() => {

    }, []);

    const display = text => text ?? "unknown";
    if(displayMode === "character") {
        return (
            <div className='Popup'>
                <div id="popup-content">
                    <span id="popup-close-button">&times;</span>
                    <div id="popup-name">Name: {data.name}</div>
                    <p>
                        Status: {display(data.status)}<br/>
                        Species: {display(data.species)}<br/>
                        Tpye: {display(data.type)}<br/>
                        Gender: {display(data.gender)}<br/>
                        Origin World: {display(data.origin.name)}<br/>
                        Current Location: {display(data.location.name)}<br/>
                    </p>
                </div>
            </div>
        )
    } else if (displayMode === "location") {
        return (
            <div className='Popup'>
                <div id="popup-content">
                    <span id="popup-close-button">&times;</span>
                    <div id="popup-name">Name: {data.name}</div>
                    <p>
                        Type: {display(data.type)}<br/>
                        Dimension: {display(data.dimension)}<br/>
                    </p>
                </div>
            </div>
        )
    } else if (displayMode === "none") {
        return;
    }
}

export default Popup;