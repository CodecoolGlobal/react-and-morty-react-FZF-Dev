import image from '../images/rick_and_morty_title.jpeg';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <img src={image} alt="" />
            <div>
                <button className='header-buttons'>Characters</button>
                <button className='header-buttons'>Locations</button>
            </div>
        </div>
    )
}

export default Header;