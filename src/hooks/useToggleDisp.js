import { useState } from "react"

export const useToggleDisp=()=>{
  const [display,setdisp]=useState("none")
  const toggleDisp=()=>{
    if(display==="none"){
        setdisp("flex")
    }
    else{
        setdisp("none");
    }
  }

  return {display,toggleDisp}
}

