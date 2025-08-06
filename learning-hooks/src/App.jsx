import { useRef } from 'react'
import './App.css'
import LearnReducer from './LearnReducer';
import LearnMemo from './LearnMemo';

function App() {


  return (
    <>
      <h1>Hello</h1>
      <Input/>
      <LearnReducer/>
      <LearnMemo/>
    </>
  )
}

function Input(){
  const inputRef=useRef(null);

function focusInput(){
 const inputBox=inputRef.current;
 inputBox.focus();
}
  return(
    <div className='input'>
    <input type="text"  ref={inputRef}  placeholder='Enter Something'/>
    <button onClick={focusInput}>Focus</button>
    </div>
 
  )
}

export default App
