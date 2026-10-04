import { useState } from 'react'

import './App.css'
import Shiv from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let studentObj = {
    name : "shiv",
    age : 21
  }
  let newArr = [2,4,5]

  return (
    <>
    <div>
      <h1 className='bg-green-400 text-black rounded-xl mb-4'>TailwindCss Test !!</h1>
      <Shiv UserTitle = "Yadav Ji !!" iconText = "SKY" /> 
      {/* upper given channel and inconText is props. props declaration  */}
    
    </div>
    </>
  )
}

export default App
