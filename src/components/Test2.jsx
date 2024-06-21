import React from 'react';
import {useCounter} from '../stores/counterStore'

function Test2() {
    console.log("tast2")
    let counter2=useCounter(state=>state.counter2)
    let changeCounter2=useCounter(state=>state.changeCounter2)
    return (
      <div>Test2
        <h1>Counter-2 :{counter2}</h1>
        <button onClick={changeCounter2}>Change counter-1</button>
      </div>
    )
}

export default Test2