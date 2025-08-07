import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[toggle,setToggle]=useState(true);

  return (
    <>
      <h1>Hello</h1>
      <button onClick={()=>{setToggle(!toggle)}}>click</button>
     { toggle &&  < FirstComponent/>}
    </>
  )
}

class FirstComponent extends Component{
constructor(){
  super();
  this.state={counter:0};
}

componentDidMount(){
  console.log("mount");
}
componentDidUpdate(){
   console.log("updatet");
}
componentWillUnmount(){
   console.log("unmount");
}
  render(){
    return <>
    <h2>First component </h2>
    <button onClick={()=>this.setState({counter:this.state.counter+1})}>Increasen</button>
    <h2>counter{this.state.counter}</h2>
    </>
  }
}
export default App
