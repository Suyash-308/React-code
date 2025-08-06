
import { useState } from 'react';
import './App.css'

function App() {
 let [num,setNum]=useState(0);

  
  return (
  <div className='container'>
    <div className='box'>
      <p>Value of number is {num}</p>
      <button onClick={()=>setNum(num+1)}>Increase</button>
      <button onClick={()=>setNum(0)}>Reset</button>
      <button onClick={()=>setNum(num-1)}>Decrease</button>
    </div>
  </div>
  );
}


export default App
