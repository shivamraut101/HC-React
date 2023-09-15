import { useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(false);

  let numberL = Math.floor(Math.random() * 10);
  let num = String(numberL);
  let upper_alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let lower_alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let special = ["!", "@", "#", "$", "."];

  function Password(len) {
    let i = 0;
    let pass = "";
    while (i < len) {
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
    pass +=`*${length}`
    return pass;
  }
  let [password, setPassword] = useState(Password(length));

  return (
    <>
      <div id="box">
        <h1 className="text-xl text-center">Password Generator</h1>
        <div className="text-center">
          <div className="">
            <input
              type="text"
              disabled
              className="bg-blue-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="p-1 active:bg-black active:text-blue-50 active:rounded-lg">
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
                setPassword(Password(length));
              }} // Update the state when the slider changes
            />{" "}
            <p className="pl-2">{length}</p>
            <label className="pl-2 numberAllowed">
              <input
                type="checkbox"
                name="number"
                id="numberAllowed"
                className="numberAllowed"
                defaultChecked={number}   
                onChange={() => {
                  setnumber((prev)=> !prev);
                  // setPassword(Password());
                  // if(e.target.checked){
                  //   setnumber((prev)=> !prev);
                  //   // setPassword(Password());
                  // }else{
                  //   setnumber(false);
                  //   // setPassword(Password());
                  // }
                  
                }}
              />
              Number
            </label>
            <label className="pl-2 charAllowed">
              <input
                type="checkbox"
                name="char"
                id="charAllowed"
                className="charAllowed"
                onChange={(e) => {
                  if(e.target.checked){
                    setchar(true);
                    // setPassword(Password());
                  }
                  else{
                    
                    setchar(false);
                    // setPassword(Password());
                  }
                  
                }}
              />
              Character
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
