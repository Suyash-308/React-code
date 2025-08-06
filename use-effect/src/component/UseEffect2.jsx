import React, { useEffect } from 'react'

function UseEffect2() {
   const [counter,setCounter]=useState(0);

   useEffect(()=>{
    console.log("API Call");
  } ,[])
  
  return (
    <>
    <h1>Hello {counter}</h1>
    <button onClick={()=>setCounter( counter+1)}>Increase</button>

    
    </>
  )
}

export default UseEffect2