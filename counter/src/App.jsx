import { useState } from 'react'
import './App.css'

function App() {
  const [number, setnumber] = useState(0)

  const increment=()=>{
    setnumber(number + 1)
  }
  const decrement=()=>{
    if(number>0) setnumber(number - 1)
  }
  const reset=()=>{
    setnumber(0)
  }
  return (
    <>
      <div>
        <h1>counter app {number}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  )
}

export default App