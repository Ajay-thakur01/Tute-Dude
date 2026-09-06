import { useState ,useCallback, useEffect, useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const copyPassword = useRef()

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    if(isNumberAllowed) str += "0123456789";
    if(isCharAllowed) str += "~!@#$%^&*";

    for (let i = 1; i < length; i++) {
      let cahrIndex = Math.floor(Math.random() *str.length + 1);
      pass += str.charAt(cahrIndex)
    }
    setPassword(pass)
  }, [length, isNumberAllowed, isCharAllowed])

  const copyPasswordToClipboard = useCallback(()=>{
    copyPassword.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  },[length, isNumberAllowed, isCharAllowed, passwordGenerator] )

  return (
    <>
    <div className='w-full p-2 max-w-2xl mx-auto shadow-md rounded-md my-8 text-red-500 bg-gray-700'>
        <h1 className='text-3xl pb-8 font-bold text-center'>Password Generator</h1>
      <div className='flex rounded-xl sahdow-md overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className='outline-none bg-white w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={copyPassword}
        />
      <button 
      onClick={copyPasswordToClipboard}
      className='bg-blue-700 text-white px-4 outline-none '>Copy</button>
      </div>

      <div className='felx text-sm gap-x-2'>
        <div className='flex item-center gap-x-1 '></div>
        <input type="range" 
        min={10}
        max={20}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}/>
        <label htmlFor="">Length : {length}</label>

      </div>
      <div className='flex item-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={isNumberAllowed}
        id='numInput'
        // onChange={()=>{setIsNumberAllowed(true)}}
        onChange={()=>{setIsNumberAllowed((prev)=>!prev)}}
        />
        <label htmlFor="numInput">Numbers</label>
      </div>

      <div className='flex item-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={isCharAllowed}
        id='charInput'
        onChange={()=>{setIsCharAllowed((prev)=>!prev)}}
        />
        <label htmlFor="charInput">Character</label>
      </div>

    </div>
    </>
  )
}

export default App
