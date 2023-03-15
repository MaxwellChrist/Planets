import { useState, useEffect } from "react";
import Data from './assets/planets-fact-site/starter-code/data.json';
import Navbar from "./components/navbar";
import PlanetDisplay from './components/planetDisplay'

import "./App.css";

function App() {

  const [data, setData] = useState(Data[2]);

  return (
    <div className="app">
      <Navbar />
      <PlanetDisplay data={data}/>
    </div>
  );
}

export default App;
