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
      <div id="logoContainer">
        <img id="logo" src={image} alt="rick and morty logo" />
      </div>
      <div id="buttons">
        <button onClick={() => setDisplay(<Characters />)} className="header-buttons">Characters</button>
        <button onClick={() => setDisplay(<Locations />)} className="header-buttons">Locations</button>
      </div>
      
      {display === "description" ? <Description/> : null}
      <Footer setDisplay={setDisplay}/>
    </div>
  );
}

export default App;