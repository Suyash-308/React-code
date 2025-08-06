import './App.css'

function App() {

  return (
    <>
    <div className='h-80 bg-white text-black dark:bg-black dark:text-white  border-4 border-amber-600'>
     <p>hello</p>
    <button  onClick={()=>{document.documentElement.classList.toggle("dark")}}>🎦</button>
    </div>

    <div className='h-40 w-40 bg-amber-200 animate-ping m-50'></div>
    </>
  )
}

export default App
