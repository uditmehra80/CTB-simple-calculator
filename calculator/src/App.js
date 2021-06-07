import React, { useState } from "react";
import "./App.css";

function App() {
  
  const [result, setResult] = useState("");
  const [show, setShow] = useState(false)

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function ClickOperation(e) {
    setResult(eval(result)  +  (e.target.name) );
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult("Error");
    }
  }

  function SignClick(){
    setResult(eval(result)*(-1));
  }
  
  function SquareClick(){
    setResult(eval(result)**2);
  }

  function SquareRoot(){
    setResult(eval(result)**(1/2));
  }

  return (
    <div className="app">
      <form>
        <input type="text" value={result} placeholder="0" disabled/>
      </form>

      <div className="keypad">
        <button id="clear" onClick={clear}>
         AC
        </button>
        <button id="backspace" onClick={backspace}>
          C
        </button>
        <button name="+" onClick={ClickOperation}>
          +
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="-" onClick={ClickOperation}>
          -
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="*" onClick={ClickOperation}>
          &times;
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="/" onClick={ClickOperation}>
          /
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button id="result" onClick={calculate}>
          =
        </button>
      </div>

      <div className="middle">
          <button onClick={() => setShow(!show)}>Scientific Mode</button>
      </div>
      
      { show?
      <div className="middle-hide">
          <button onClick= { SignClick } className="hidebtn" >Sign</button>
          <button onClick= { SquareClick } className="hidebtn" >Square</button>
          <button onClick= { SquareRoot } className="hidebtn" >Square Root</button>
      </div>
        :null}
    </div>
  );
}

export default App;
