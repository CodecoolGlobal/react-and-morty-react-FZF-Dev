import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import LandingPage from "./components/LandingPage";

function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);

  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);

  return (
    <div className="App">
      <LandingPage/>
    </div>
  )
}

export default App;
