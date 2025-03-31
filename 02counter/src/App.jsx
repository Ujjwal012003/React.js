import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  //let counter = 15

  const addValue = () => {

    if(counter<20){
      setCounter(counter+1)
    }

    else{
      console.log("Cannot exceed 20")
    }
   
    
    
    
    //console.log("clicked", counter);
    

  }

  const removeValue= () =>{
    if(counter>0){
      setCounter(counter-1)

    }
    //console.log("Removed value", counter)
    else{
      console.log("Value cannot be less than 0.")
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>Add Value: {counter}</button> <br />
      <button
      onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
