
import { createContext, useContext, useState } from 'react'
import './App.css'
import Component1 from './Component1';
import Component2 from './Component2';

  export const CounterContext=createContext();

function App() {
    const[count,setCount]=useState(0)

  return (
    <div className='bg-amber-50 justify-center items-center h-screen flex flex-col gap-3'>
      <CounterContext.Provider value={[count,setCount]}>
      <Component1 />
      <Component2 />
      </CounterContext.Provider>

    </div>
  )
}

export default App;
