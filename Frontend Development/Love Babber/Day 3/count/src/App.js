import "./App.css";
import React, {useState} from "react";

function App() {
  
  const [count, setValue] = useState(0);
 
  const resetbtn=() =>{
      setValue(0);
      
  }

  const Increment=()=>{
    setValue(count+1);
    
  }
  const Decrement=()=>{
    setValue(count-1);
  }



  return (
   <div className="container">
     <div >
        <h3 className="heading">Increment & Decrement</h3>
     </div>
    <div className="btn">
      <div>
          <button className="Increment" onClick={Increment}>+</button>
        
      </div>
      <div>
          <p>{count}</p>
        
      </div>
      <div>
          <button className="Decrement" onClick={Decrement}>-</button>
        
      </div>
    </div>

    <div className="reset" onClick={resetbtn}>
      <button>Reset</button>
    </div>
    
   </div>
  );
}

export default App;