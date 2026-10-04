import { useState } from 'react'

import './App.css'

function App() {
//  Hooks create kiya
  const[color,setcolor] =useState("white");
  return (
   <div className='w-full h-screen '
   style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 px-2 py-3 inset-x-0'>
      <div className='flex flex-wrap justify-center rounded-2xl shadow-2xl gap-3 px-3 py-2'
      style={{backgroundColor:"brown"}}>
        <button onClick={() =>setcolor("red")} className='outline-none px-3 py-2 rounded-3xl'
          style={{backgroundColor:"red"}}>Red</button>
            <button onClick={() =>setcolor("green")} className='outline-none px-3 py-2 rounded-full'
          style={{backgroundColor:"green"}}>Green</button>
            <button onClick={() =>setcolor("blue")} className='outline-none px-3 py-2 rounded-full'
          style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={() =>setcolor("olive")} className='outline-none px-3 py-2 rounded-full'
          style={{backgroundColor:"olive"}}>Olive</button>
            <button onClick={() =>setcolor("gray")} className='outline-none px-3 py-2 rounded-full'
          style={{backgroundColor:"gray"}}>Gray</button>
            <button onClick={() =>setcolor("yellow")} className='outline-none px-3 py-2 rounded-full'
          style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={() =>setcolor("pink")} className='outline-none px-3 py-2 rounded-full'
          style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={() =>setcolor("purple")} className='outline-none px-3 py-2 rounded-full'
          style={{backgroundColor:"purple"}}>Purple</button>
            <button onClick={() =>setcolor("lavender")} className='outline-none px-3 py-2 rounded-full'
          style={{backgroundColor:"lavender"}}>Lavender</button>
            <button onClick={() =>setcolor("white")} className='outline-none px-3 py-2 rounded-full'
          style={{backgroundColor:"white"}}>White</button>
            <button onClick={() =>setcolor("black")} className='outline-none px-3 py-2 rounded-full'
          style={{backgroundColor:"black"}}>Black</button>
      </div>
    </div>
   </div>
  )
}

export default App
