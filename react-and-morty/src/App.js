import { useState } from "react";
import "./App.css";
import image from "./components/images/rick_and_morty_title.jpeg";
import Description from "./components/Description";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Footer from "./components/Footer";

function App() {
  const [display, setDisplay] = useState("description");

  return (
    <div id="App">
      <div id="Header">
        <div id="logoContainer">
          <img id="logo" src={image} alt="rick and morty logo" />
        </div>
        <div id="buttons">
          <button onClick={() => setDisplay("characters")} className="header-buttons">Characters</button>
          <button onClick={() => setDisplay("locations")} className="header-buttons">Locations</button>
        </div>
      </div>
      {display === "characters" ? <Characters/> : null}
      {display === "locations" ? <Locations/> : null}
      {display === "description" ? <Description/> : null}
      <Footer setDisplay={setDisplay}/>
    </div>
  );
}

export default App;