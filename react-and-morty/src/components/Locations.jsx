import './Locations.css';
import LocationCard from './LocationCard';
import { useEffect, useState, useRef } from 'react';
import { locations } from '../api/dataRoutes';

function Locations(props) {

    const [locationsPageNumber, setLocationsPageNumber] = useState(1);
    const [locationData, setLocationData] = useState([]);
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
        const controller = new AbortController();
        fetch(`${locations}${locationsPageNumber}`, { signal: controller.signal })
            .then(res => res.json())
            .then(function (res) {
                if (res.results) setLocationData((current) => [...current, ...res.results])
            })
        return () => { controller.abort() };
    }, [locationsPageNumber]);

    return (
        <div id="Characters">
            <div id="locationCardContainer">
                {locationData.map((location) => {
                    return (
                        <div key={location.id} ref={setLastElement}>
                            <LocationCard
                                location={location}
                                setPopupDisplay={props.setPopupDisplay}
                                setPopupDisplayData={props.setPopupDisplayData}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Locations;