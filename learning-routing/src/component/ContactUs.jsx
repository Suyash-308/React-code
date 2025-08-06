import React from 'react'
import { useParams } from 'react-router-dom'

function ContactUs() {
    const params=useParams();
    console.log(params.id);
  return (
   <>
    <h1>ContactUs id : {params.id} </h1>
   </>
  )
}

export default ContactUs