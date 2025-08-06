import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num, setNum] = useState(0)
   const [num1, setNum1] = useState(0)
   const [result,setResult]=useState( )

   function add(){
      return num+num1;
   }

  return (
    <>
      <input type="number" value={num} onChange={(event)=>{
        setNum(event.target.value)
      }} />

        <input type="number" value={num1} onChange={(event)=>{
         setNum1(event.target.value)
      }} />
      
      <button onClick={add}>click</button>

      { <h1>Result{result}</h1> }
      
    </>
  )
}

export default App
