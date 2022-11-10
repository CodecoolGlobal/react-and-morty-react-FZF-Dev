import './Footer.css';

function Footer(props) {
    return (
        <div id="Footer">
            <div id="trademark-container">
                <p id="trademark">Domestos Coding™</p>
            </div>
            <div id="footer-button-container">
                <button id="footer-button" onClick={() => {
                    props.setDisplay("description");
                    props.setCharBtnColor("white");
                    props.setLocBtnColor("white");
                }}>Back to homepage</button>
            </div>
        </div>
    );
}

export default Footer;