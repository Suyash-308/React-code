import React, { useReducer } from 'react'

function reducerFn(state,action){
    if(action=="increase"){
        return state+1;
    }else if(action=="decrease"){
        return state-1;
    }else if(action=="reset"){
        return 0;
    }

}

function LearnReducer() {
    const[count,dispatch]=useReducer(reducerFn,0);
  return (
    <div>
        <h1>Reducer fn {count}</h1>
        <button onClick={()=>{dispatch("increase")}}>Increase</button>
        <button onClick={()=>{dispatch("decrease")}}>Decrease</button>
        <button onClick={()=>{dispatch("reset")}}>Reset</button>

    </div>
  )
}

export default LearnReducer