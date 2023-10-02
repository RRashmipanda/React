import React,{useState} from 'react'
import viteLogo from '/vite.svg'
import './App.css'






function App() {
 
  const [counter,setCounter]=useState(15)
  
  const addValue=()=>{
    // counter=counter+1;
    setCounter(counter+1)
     
    // console.log("value added",Math.random());
  }
  const removeValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
     <h1>Hello World</h1>
     <h2>Counter value:{counter}</h2>

      
<button onClick={addValue}>Add Value</button>
<br/>
<button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
