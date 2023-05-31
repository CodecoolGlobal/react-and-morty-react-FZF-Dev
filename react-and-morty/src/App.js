import { useState } from "react";
import "./App.css";
import image from "./components/images/rick_and_morty_title.jpeg";
import Description from "./components/Description";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

const SELECTED_BUTTON_COLOR = "rgb(148, 233, 112)";

function App() {
  const [display, setDisplay] = useState("description");
  const [popupDisplayData, setPopupDisplayData] = useState();
  const [popupDisplay, setPopupDisplay] = useState("none");
  // const [chrBtnClr, setCharBtnColor] = useState("white");
  // const [locBtnColor, setLocBtnColor] = useState("white");

  const charBtnColor = display === "characters" ? SELECTED_BUTTON_COLOR : "white";
  const locBtnColor = display === "locations" ? SELECTED_BUTTON_COLOR : "white";
  
  return (
    <div id="App">
      <div id="Header">
        <div id="logoContainer">
          <img id="logo" src={image} alt="rick and morty logo" />
        </div>
        <div id="buttons">
          <button onClick={() => { setDisplay("characters"); }} style={{ color: charBtnColor }} className="header-button">Characters</button>
          <button onClick={() => { setDisplay("locations"); }} style={{ color: locBtnColor }} className="header-button">Locations</button>
        </div>
      </div>
      <Popup
        dataToDisplay={popupDisplayData}
        popupDisplay={popupDisplay}
        setPopupDisplayData={setPopupDisplayData}
        setPopupDisplay={setPopupDisplay}
      />
      {display === "characters" ? <Characters setPopupDisplay={setPopupDisplay} setPopupDisplayData={setPopupDisplayData} /> : null}
      {display === "locations" ? <Locations setPopupDisplay={setPopupDisplay} setPopupDisplayData={setPopupDisplayData} /> : null}
      {display === "description" ? <Description /> : null}
      <Footer setDisplay={setDisplay}/>
    </div>
  );
}

export default App;