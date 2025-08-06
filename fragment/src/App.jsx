import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './components/FirstComponent';
import Sports from './components/Sports';

function App() {

  return (
    <div>
     <h2>there h2</h2>
     <h4>this is h4</h4>
     <FirstComponent userName="suyash" age="21"/>
     <Sports/>
    </div>
  );
}

export default App
