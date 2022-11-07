import image from '../images/rick_and_morty_title.jpeg';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="LandingPage">
            <img src={image} alt="" />
            <div>
                <button className='landing-buttons'>Characters</button>
                <button className='landing-buttons'>Locations</button>
            </div>
            <div id='description'>
                <p>Description</p>
            </div>
        </div>
    )
}

export default LandingPage;