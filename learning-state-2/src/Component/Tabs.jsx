import React, { useState } from 'react'

function Tabs() {
    const [tabs,setTabs]=useState("all")
  return (
    <div className='container'>
      <div>
        <button onClick={()=>setTabs("all")}>All</button>
        <button onClick={()=>setTabs("music")}>Music</button>
        <button onClick={()=>setTabs("movies")}>Movies</button>
        <button onClick={()=>setTabs("shorts")}>Shorts</button>
      </div>

      <div>
        { tabs==="all" && <h1>All content</h1>}
        { tabs==="music" && <h1>Music</h1>}
        { tabs==="movies" && <h1>Movies</h1>}
        { tabs==="shorts" && <h1>Shorts</h1>}
      </div>
    </div>
    
  )
}

export default Tabs