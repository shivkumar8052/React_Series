import { useCallback, useEffect, useState,useRef } from 'react'

import './App.css'

function App() {
  const[length,setlength] =useState(0)
  const[numberallowed, setnumberallowed]=useState(false)
  const[charallowed,setcharallowed] = useState(false)
  const[Password,setpassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)
  //PasswordGenerator function creation ..........

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+="0123456789"
    if(charallowed) str+="!@#%$^&*+_=-~"

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char);
1     
    }
//By using hooks set password value..............

    setpassword(pass);
  },[length,numberallowed,charallowed,setpassword])


//input item  select function creating ..............

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();

    window.navigator.clipboard.writeText(Password)
  }, [Password])
//use of  useEffect hooks .in react.............

  useEffect(() =>{
    passwordGenerator()
  }, [length,numberallowed,charallowed])

  return (
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3 font-bold text-2xl '>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={Password}
            className="w-full bg-amber-50 text-black py-1 px-2"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked ={numberallowed}
          id="numberInput"
          onChange={() => {
              setnumberallowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                  setcharallowed((prev) => !prev )
              }}
          />
          <label htmlFor='characterInput'>Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
