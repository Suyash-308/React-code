import React, { useState } from 'react'

function Faq() {
    const [faq,setFaq]=useState(false);
  
  return (
    <div>
        <div>
            <p>Quetions</p> <button onClick={()=>setFaq(!faq)}>+</button>
        </div>

        <div>
            {faq  && <p>Answer</p>}
        </div>
    </div>
  )
}

export default Faq