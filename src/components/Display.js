import React from "react";

export default function Display({result,mode}){

    return(
       
         <form>
        <input className={mode} type="text" value={result} placeholder="0" disabled/>
      </form>
    )
}