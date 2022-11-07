import { useState } from "react";
import "./App.css";
import Description from "./components/Description";
import image from "./components/images/rick_and_morty_title.jpeg";
import Characters from "./components/Characters";
import Locations from "./components/Locations";

function App() {
  const [display, setDisplay] = useState(<Description />);

  return (
    <div className="App">
      <div className="Valami">
        <img id="logo" src={image} alt="rick and morty logo" />
        <div>
          <button onClick={() => setDisplay(<Characters />)} className="header-buttons">Characters</button>
          <button onClick={() => setDisplay(<Locations />)} className="header-buttons">Locations</button>
        </div>
      </div>
      {display}
    </div>
  );
}

export default App;