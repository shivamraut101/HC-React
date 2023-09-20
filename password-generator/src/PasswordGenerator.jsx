// This is Password generator using a Callback hook, useEffect and useRef hook  

import { useState,useCallback, useEffect, useRef } from "react"; 

function PasswordGenerator(){
    const [length, setlength] = useState(8);
    const [number, setnumber] = useState(false);
    const [char, setchar] = useState(false);
    let [password, setPassword] = useState("");
  
    let numberL = Math.floor(Math.random() * 10);
    let num = String(numberL);
    let upper_alpha = [
      "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    ];
  
    let lower_alpha = [
      "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    ];
  
    let special = ["!", "@", "#", "$", "."];
  
    const passwordGenerator = useCallback(()=>{
        let i = 0;
        let pass = "";
        while (i < length) {
          let arr = [upper_alpha, lower_alpha, special, num];
          let arrCount = Math.floor(Math.random() * 4);
          if (arrCount == 0 || arrCount == 1) {
            let alpha = Math.floor(Math.random() * 26);
            var Character = arr[arrCount];
            pass += `${Character[alpha]}`;
          } else if ((!char && arrCount == 2) || (!number && arrCount == 3)) {
            let alpha = Math.floor(Math.random() * 26);
            let change = Math.floor(Math.random() * 2);
            var Character = arr[change];
            pass += `${Character[alpha]}`;
          } else if (char && arrCount == 2) {
            let special = Math.floor(Math.random() * 5);
            var Character = arr[arrCount];
            pass += `${Character[special]}`;
          } else if (number && arrCount == 3) {
            pass += `${num}`;
          }
    
          i++;
        }
        
        setPassword(pass)
    },[length,number,char,setPassword])
    
    const passwordRef = useRef(null)

    const CopyPassword = useCallback(()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,length)
        window.navigator.clipboard.writeText(password)
       
    },[password])

    useEffect(()=>{
        passwordGenerator()
    },[length,number,char,passwordGenerator])
  
   

    return(
<>
<div id="box">
        <h1 className="text-xl text-center my-4">Password Generator</h1>
        <div className="text-center">
          <div className="">
            <input
              type="text"
              readOnly
              className="bg-orange-500 border w-60 border-gray-300 rounded-lg p-2 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordRef}
            />
            <button
            onClick={CopyPassword}
            className="bg-white ml-1 p-2 rounded-lg active:bg-blue-300 active:scale-90 active:rotate-3 transition-transform transform ">
              Copy
            </button>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="range"
              min="08"
              max="99"
              step="1"
              value={length} // Bind the value to the state variable
              id="myRange"
              className="slider-thumb w-1/12 bg-blue-500 appearance-none h-2 rounded-full"
              onChange={(e) => {
                setlength(e.target.value);
                
              }} // Update the state when the slider changes
            />{" "}
            <p className="pl-2">{length}</p>
            <label className="pl-2 numberAllowed">
              <input
                type="checkbox"
                defaultChecked={number}   
                onChange={() => {
                  setnumber((prev)=> !prev);
                }}
              />
              Number
            </label>
            <label className="pl-2 charAllowed">
              <input
                type="checkbox"
                defaultChecked={char}   
                onChange={() => {
                  setchar((prev)=> !prev);
                }}
              />
              Character
            </label>
          </div>
        </div>
      </div>
</>
    )
}

export default PasswordGenerator;