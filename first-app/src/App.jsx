import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './FirstComponent'

function App() {
  return  <div><h1>Suyash</h1>
               <FirstComponent/>
               <SecondComponent firstName="Suyash"   age="21"   img="img1" />
               <SecondComponent firstName="Suyash1"   age="2"   img="img2" />
               <SecondComponent firstName="Suyash2"   age="23"  img="img3" />
               <SecondComponent firstName="Suyash3"   age="22"  img="img4" />
               
          </div>
}

function SecondComponent(props){
  return <div className='div'><p className='para'>{props.firstName}</p>
              {/* <p className='desc'> {props.age} </p> */}
              {/* <p className='img'> {props.img}</p> */}
         </div>
}



export default App
