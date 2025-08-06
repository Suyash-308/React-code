import React, { useMemo, useState } from 'react'

function LearnMemo() {
    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(0);

    const subTotal=useMemo(()=>{
      return count*(count+1)/2;
    },[count])
 console.log(subTotal)
  return (

    <div>
        <h1>Count is {count}</h1>
        <h1>count 1 is{count1}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={()=>{setCount1(count1+1)}}>Increase</button>
    </div>
  )
}

export default LearnMemo;