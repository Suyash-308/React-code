import React, { useState } from 'react'

function AddNum() {
const [num,setNum]=useState(0);
const [num1,setNum1]=useState(0);
const [result,setResult]=useState();


 const add=()=>{
   setResult( num+num1);
}

  return (
    <div>
         <input type="number"
          value={num} 
          onChange={(event)=>setNum(parseInt(event.target.value)||0)} />

           <input type="number"
          value={num1} 
          onChange={(event)=>setNum1(parseInt(event.target.value)||0)} />

          <button onClick={add}>Add</button>

           <h3>Result : {result}</h3>

    </div>
  )
}

export default AddNum
