import './Description.css';
import descriptionFunny from "./images/landingpagefunny.png";

function Description() {
    return (
        <div id='description'>
            <p id="descriptionText">This is a comprehensive guide to the Rick and Morty universe brought to you by Domestos Coding™</p>
            <img id="landingEasterEgg" src={descriptionFunny} alt="landingPic"></img>
        </div>
    );
}

export default Description;