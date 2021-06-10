import React from "react";

export default function KeyMode({show, setShow,result,setResult}){

    function SignClick(){
     setResult(eval(result)*(-1));
    }
  
    function SquareClick(){
     setResult(eval(result)**2);
    }

    function SquareRoot(){
     setResult(eval(result)**(1/2));
    }

    return(<>
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
        </>
    )
}