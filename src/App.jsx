import React, { useState } from "react";
import "./App.css";
import BodyContainer from "./components/BodyContainer";

function App() {
  const [color, setColor] = useState("Red 🟥");
  return (
    <div className="App">
      <BodyContainer />
      <button onClick={() => setColor("Red 🟥")}>Red</button>
      <button onClick={() => setColor("Green 🟩")}>Green</button>
    </div>
  );
}

export default App;
