import { Component, useState } from 'react'
import './App.css'
import FirstComponent from './firstComponent';

function App() {
  const[toggle,setToggle]=useState(true);

  return (
    <>
    <h1>Hello </h1>
      <FirstComponent>
        <TestComponent/>
      </FirstComponent>
      <TestComponent2/>
    </>
  )
}

function TestComponent(){
  return(
  <>
  <h1>Test component</h1>
  {num}
  </>

  )
}
function TestComponent2(){
  return(
  <>
   <h1>Test component2</h1>
  
  </>
 
  )
}
export default App
