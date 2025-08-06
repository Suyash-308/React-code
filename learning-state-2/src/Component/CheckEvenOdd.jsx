import React, { useState } from 'react'

function CheckEvenOdd() {
const[num,setNum]=useState(0);

const checkNum=()=>{
    if(num%2==0){
        alert("Even");
    }
    else{alert("odd");
    }

}

  return (
    <>
        <input 
        type="number" 
        value={num}
        onChange={(event)=>setNum (parseInt(event.target.value)||0)} />
        <button onClick={checkNum}> click</button>
    </>
  )
}

export default CheckEvenOdd;