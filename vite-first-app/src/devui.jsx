import React from "react";
import { useState } from "react";
import BgChanger from "./components/bgChanger";
function DevUiCard() {

    let [Color, setColor] = useState('white')
    const display ={
        display:'flex',
        justifyContent: 'center',
        backgroundColor:'Pink',
        borderRadius:5
    }

    function buttonColor(colors){
        setColor(colors)
    }

  return (
    <>
    <div style={display}>
    
    <button value={'white'}  onClick={() => buttonColor('white')} className="bg-white m-2 p-2 rounded-xl active:bg-blue-300 active:scale-90 active:rotate-3 transition-transform transform">White</button>
    <button value={'amber'} onClick={() => buttonColor('amber-800')} className="bg-amber-800 m-2 p-2 rounded-xl text-white active:bg-blue-300 active:scale-90 active:rotate-3 active:text-black transition-transform transform">Amber</button>
    <button value={'black'} onClick={() => buttonColor('black')} className="bg-black m-2 p-2 rounded-xl text-white active:bg-blue-300 active:scale-90 active:rotate-3 active:text-black transition-transform transform">Black</button>
    <button value={'orange'} onClick={() => buttonColor('orange-500')} className="bg-orange-500 m-2 p-2 rounded-xl text-white active:bg-blue-300 active:scale-90 active:rotate-3 active:text-black transition-transform transform">Orange</button>
    <button value={'emerald'} onClick={() => buttonColor('emerald-900')} className="bg-emerald-900 m-2 p-2 rounded-xl text-white active:bg-blue-300 active:scale-90 active:rotate-3 active:text-black transition-transform transform">Emerald</button>
  </div>
  <BgChanger bgColor={Color}/>
   
    </>
    
  );
}

export default DevUiCard;
