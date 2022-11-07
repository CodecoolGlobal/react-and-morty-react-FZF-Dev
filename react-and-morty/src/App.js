import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Description from "./components/Description";

function App() {
  const [display, setDisplay] = useState(<Description/>);

  /*console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);*/

  return (
    <div className="App">
      <Header />
      {display}
    </div>
  )
}

export default App;
