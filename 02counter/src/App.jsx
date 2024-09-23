import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter] = useState(0)

 //let counter = 15;

 const addValue = () => {
  if(counter >= 20){
     return;
  }else{
    //setCounter(counter + 1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1) 
  }
  //counter = counter + 1;
 }

 const decreaseValue = () => {
  if(counter <= 0){
    return;
  }else{
    setCounter(counter - 1)
  }
  
}
  return (
    <>
     <h1>React</h1>
     <h2>Counter value: {counter}</h2>

     <button 
      onClick={addValue}
     > Increase value </button>
     <br/>
     <button
     onClick={decreaseValue}
     > Decrease value</button>
    </>
  )
}

export default App
