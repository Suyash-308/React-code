import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './slices/counterSlice';

function App() {

  return (
    <div className='text-center flex flex-col gap-9'>
      <h1 className='bg-amber-200 text-4xl' >Hello</h1>
      <Component1/>
      <Component2/>
      <Component3/>
    </div>
  )
}

function Component1(){
const counter = useSelector((state) => state.counterReducer);
// console.log(counter)
  return (
    <>
      <h1>Counter is {counter}</h1>
    </>
  );
}
function Component2(){
  const dispatch=useDispatch();

  return(
    <>
    <button onClick={()=>
      dispatch(decrement())
    }  className='border-2 p-3 bg-blue-300 rounded-xl w-fit self-center'>Click</button>

  
    </>
  )
}
function Component3(){
const counter = useSelector((state) => state.counterReducer);
  return (
    <>
      <h1>component 3 Counter is {counter}</h1>
    </>
  );
}
export default App
