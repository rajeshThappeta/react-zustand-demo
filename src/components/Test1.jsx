import React from 'react';
import {useCounter} from '../stores/counterStore'

function Test1() {
  console.log("task-1")
  //let {counter1,changeCounter1}=useCounter(state=>state)
   let counter1=useCounter(state=>state.counter1)
   let changeCounter1=useCounter(state=>state.changeCounter1)
  return (
    <div>Test1
      <h1>Counter-1 :{counter1}</h1>
      <button onClick={changeCounter1}>Change counter-1</button>
    </div>
  )
}

export default Test1