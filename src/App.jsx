import { useState } from "react";

import Navbar from "./components/navbar";

import "./App.css";

function App() {

  // const [mobileview, setMobileView] = useState(window.innerWidth)

  // useEffect(() => {
  //   window.addEventListener("resize")
  // })

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
