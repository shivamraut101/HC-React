import { useState } from "react";

function App() {
  let [count, setCount] = useState(5);

  const addValue = () => {
    
    setCount(count + 1);
    if(count >=1){
      document.querySelector('p').innerHTML=""
    }
    
  };
  const removeValue = () => {
    if(count !=0){
      setCount(count - 1);
      document.querySelector('p').innerHTML=""
    }
    else if(count == 0){
document.querySelector('p').innerHTML="Can't go in Negative value"
    }
    
    
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={addValue}>Add Value{count}</button>
      <button onClick={removeValue}>Remove Value{count}</button>
      <p></p>

      
    </>
  );
}

export default App;
