import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './component/AboutUS'
import Home from './component/Home'
import ContactUs from './component/ContactUs'
import NotFound from './component/NotFound'
import Header from './component/Header'

function App() {
  
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='about-us'  element={<AboutUs/>}/>
      <Route path='contact-us/:id'  element={<ContactUs/>}/>
      <Route path='*'  element={<NotFound/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
