import './Locations.css';
import LocationCard from './LocationCard';
import { useEffect, useState, useRef } from 'react';
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
    const [locationData, setLocationData] = useState([])
    const [lastElement, setLastElement] = useState(null);

    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting) {
                    setLocationsPageNumber((no) => no + 1);
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
        fetch(`${locations}${locationsPageNumber}`)
            .then(res => res.json())
            .then(function (res){
                if (res.results) setLocationData([...locationData,...res.results])
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locationsPageNumber]);

    useEffect(()=>{
        setLocationsDisplay(
            locationData.map((location) => {
                            return (
                                <div key={location.id} ref={setLastElement}>
                                    <LocationCard
                                        key={location.id} 
                                        location={location} 
                                        images={locationImages[location.type]} 
                                        setPopupDisplay={props.setPopupDisplay}
                                        setPopupDisplayData={props.setPopupDisplayData}
                                    />
                                </div> 
                            )
                        })
                    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locationData])

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