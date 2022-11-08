import './Locations.css';
import LocationCard from './LocationCard';
import { useEffect, useState } from 'react';
import { locations } from '../api/dataRoutes';
import cluster from "./images/cluster.jpg";
import dream from "./images/dream.jpeg";
import fantasytown from "./images/fantasytown.webp";
import microverse from "./images/microverse.jpg";
import planet from "./images/planet.jpg";
import resort from "./images/resort.jpg";
import spacestation from "./images/spacestation.jpg";
import tv from "./images/tv.jpg";

function Locations(props) {
    const locationImages = {
        "Planet": planet,
        "Cluster": cluster,
        "Space station": spacestation,
        "Microverse": microverse,
        "TV": tv,
        "Resort": resort,
        "Fantasy town": fantasytown,
        "Dream": dream
    };

    const [locationsPageNumber, setLocationsPageNumber] = useState(1);
    const [locationsDisplay, setLocationsDisplay] = useState("Loading...");

    useEffect(() => {
        setLocationsDisplay("Loading...");
        fetch(`${locations}${locationsPageNumber}`)
            .then(res => res.json())
            .then(res => setLocationsDisplay(
                res.results.map((location) => {
                    //if(!Object.keys(locationImages).includes(location.type)){
                    //    console.log(location.type)
                    //}
                    return (
                        <LocationCard key={location.id} location={location} images={locationImages[location.type]} />
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