import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement, reset, increaseByVal } from './slices/counterSlice';

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
    <div className='flex gap-2'>
    <button onClick={()=>
      dispatch(increment())
    }  className='border-2 p-3 bg-blue-300 rounded-xl w-fit self-center'>+</button>
     <button onClick={()=>
      dispatch(decrement())
    }  className='border-2 p-3 bg-blue-300 rounded-xl w-fit self-center'>-</button>
     <button onClick={()=>
      dispatch(reset())
    }  className='border-2 p-3 bg-blue-300 rounded-xl w-fit self-center'>Reset</button>
     <button onClick={()=>
      dispatch(increaseByVal(5))
    }  className='border-2 p-3 bg-blue-300 rounded-xl w-fit self-center'>increaseByVal</button>

  
    </div>
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
