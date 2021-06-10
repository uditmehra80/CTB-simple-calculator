import React, { useState } from "react";
import Display from "./components/Display";
import KeyMode from "./components/KeyMode";
import KeyPad from "./components/KeyPad";
import DarkMode from "./components/DarkMode";


export default function App() {
  
  const [result, setResult] = useState("");
  const [show, setShow] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
  <div className={darkMode ? "dark-mode" : "light-mode"}>

    <DarkMode
    darkMode={darkMode}
    setDarkMode={setDarkMode}
    />

    <div className="app">
      <Display
      mode={darkMode ? "displayDark" : "displayLight"}
      result={result}
      setResult={setResult}
      />

      <div className={darkMode ? "keypad-dark" : "keypad-light"}>
        <KeyPad
        result={result}
        setResult={setResult}
        />
      </div>
      <div>
        <KeyMode
        result={result}
        setResult={setResult}
        show={show}
        setShow={setShow}
        />
      </div>
    </div>
  </div>
  );
}

