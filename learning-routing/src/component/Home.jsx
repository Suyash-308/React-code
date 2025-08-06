import React from 'react'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUS'

function Home() {
  return (
    <>
    <h1>Home</h1>
    <br />
    <Link to="contact-us">contact us</Link>
    <br />
    <Link to="about-us">about us</Link>
    </>
  )
}

export default Home