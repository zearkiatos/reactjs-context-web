import React, { useState, createContext } from "react";
import "./App.css";
import BodyContainer from "./components/BodyContainer";
import ColorContext from "./context/colorContext";

function App() {
  const [color, setColor] = useState("red");
  const name = "Pedro";
  const contextValue = { color, name };
  return (
    <ColorContext.Provider value={contextValue}>
      <div className="App">
        <BodyContainer />
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("green")}>Green</button>
      </div>
    </ColorContext.Provider>
  );
}

export default App;
