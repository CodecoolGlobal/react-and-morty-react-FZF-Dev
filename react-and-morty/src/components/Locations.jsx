import './Locations.css';
import LocationCard from './LocationCard';
import { useEffect, useState, useRef } from 'react';
import { locations } from '../api/dataRoutes';

function Locations(props) {

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
            .then(function (res) {
                if (res.results) setLocationData([...locationData, ...res.results])
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locationsPageNumber]);

    useEffect(() => {
        setLocationsDisplay(
            locationData.map((location) => {
                return (
                    <div key={location.id} ref={setLastElement}>
                        <LocationCard
                            key={location.id}
                            location={location}
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
            <div id="locationCardContainer">
                {locationsDisplay}
            </div>
        </div>
    );
}

export default Locations;