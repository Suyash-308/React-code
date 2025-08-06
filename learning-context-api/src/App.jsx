
import { useState } from 'react'
import './App.css'
function App() {
    const[count,setCount]=useState(0)

  return (
    <div className='bg-amber-50 justify-center items-center h-screen flex flex-col gap-3'>
      <Component1 count={count} setCount={setCount}/>
      <Component2 count={count}/>
    </div>
  )
}

function Component1({count,setCount}){

  return(
  <div  className='bg-blue-300 p-8 mb-5 '>
  <button  className='border-2  bg-amber-200 p-1' onClick={()=>setCount(count+1)}>Increase</button>
  </div>)
}

function Component2({count}){
  return<div className='bg-red-700 p-13'>
  
  <h1>{count}</h1>
  </div>
}

export default App
