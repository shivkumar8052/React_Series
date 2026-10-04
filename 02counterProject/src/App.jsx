import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter,shivCounter] = useState(0)// Hooks ka use .........

//  let counter = 0;
  const addValue = () =>{

    if(counter>=0 && counter<=19){
      counter = counter+1;
      shivCounter(counter)
      
    }
  
   
    
  }
  const DecreaseVal = ()=>{
    if(counter>=1 && counter<=20){
    counter = counter-1;
    shivCounter(counter)
    }
    
  }
  return (
    <>
     <h1>Hello, EveryOne!!</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={DecreaseVal}>Decrease Value</button>
      
    </>
  )
}

export default App
