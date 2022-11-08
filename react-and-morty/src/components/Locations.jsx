import './Locations.css';
import LocationCard from './LocationCard';
import { useEffect, useState } from 'react';
import { locations } from '../api/dataRoutes';

function Locations(props) {
    const [locationsPageNumber, setLocationsPageNumber] = useState(1);
    const [locationsDisplay, setLocationsDisplay] = useState("Loading...");

    useEffect(() => {
        setLocationsDisplay("Loading...");
        fetch(`${locations}${locationsPageNumber}`)
            .then(res => res.json())
            .then(res => setLocationsDisplay(
                res.results.map((location) => {
                    return (
                        <LocationCard key={location.id} location={location} />
                    )
                })
            ))
    }, [locationsPageNumber]);

    return (
        <div id="Characters">
            <button onClick={() => { if(locationsPageNumber !== 1) setLocationsPageNumber(locationsPageNumber - 1) }}>prev</button>
            <button onClick={() => { setLocationsPageNumber(locationsPageNumber + 1) }}>next</button>
            <div id="locationCardContainer">
                {locationsDisplay}
            </div>
        </div>
    );
}

export default Locations;

/*
{id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human', type: '', …}
*/