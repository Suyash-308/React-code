import { useContext } from "react";
import { CounterContext } from "./App";


function Component2(){

const [count,setCount]=useContext(CounterContext);
  return<div className='bg-red-700 p-13'>
  <h1>{count}</h1>
  </div>
}

export default Component2;
