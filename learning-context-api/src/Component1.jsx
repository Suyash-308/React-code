import { useContext } from "react";
import { CounterContext } from "./App";

function Component1(){
 const [count,setCount]=useContext(CounterContext);

  return(
  <div  className='bg-blue-300 p-8 mb-5 '>
  <button  className='border-2  bg-amber-200 p-1' onClick={()=>setCount(count+1)}>Increase</button>
  </div>)
}


export default Component1;