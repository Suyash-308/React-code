import { useState } from 'react'

import './App.css'
import Todos from './Components/Todos'

function App() {
  let  isLogIn=true;
  return (
    <div>
    {isLogIn? <h1>Welcome back</h1> : <h1>   Sign up to continue </h1>}
    <Todos/>
    </div>
  );
}






export default App
