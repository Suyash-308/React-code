import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [counter,setCounter]=useState(0);
    const [counter2,setCounter2]=useState(0);

    useEffect(()=>{
        console.log("API CAll")
    },[counter])



  return (
    <>
    <h1>Counter-1 :{counter}</h1>
    <button onClick={()=>{setCounter(counter+1)}}>i</button>
     <h1>Counter-2:{counter2}</h1>
     <button onClick={()=>{setCounter2(counter2+1)}}>u</button>
    
    
    </>
  )
}

export default UseEffect