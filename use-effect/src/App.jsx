import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect from './component/UseEffect';

function App() {
 const [isVisible,setVisible]=useState(true)

return(
  <div>
    <h1>Para is here</h1>
    <button onClick={()=>{setVisible(!isVisible)}}>Click</button>

    {isVisible && <TestComponent/>}
  </div>
)

function TestComponent(){
  useEffect(()=>{
  console.log("Hii");
  return ()=>{
    console.log("Hello")
  }
},[])


return (
  <div>
    <p>Hey</p>
  </div>
)};
}

export default App
