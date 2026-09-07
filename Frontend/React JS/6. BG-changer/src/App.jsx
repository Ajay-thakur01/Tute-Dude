import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className='w-full h-screen duration-5000'
    style={{backgroundColor: color}}>
      <div className='fixed flex gap-4 shadow-md flex-wrap rounded-2xl bg-white justify-center bottom-12 inset-x-0 p-2 '>
        <button
        onClick={() => setColor("green")} 
        className='outline-none px-4 py-1 rounded-full shadow-lg bg-green-500 text-white'>
          Green</button>

          <button
          onClick={() => setColor("red")} 
          className='outline-none px-4 py-1 rounded-full shadow-lg bg-red-500 text-white'>
          Red</button>

          <button onClick={() => setColor("yellow")} 
          className='outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-500 text-white'>
          Yellow</button>

          <button onClick={() => setColor("blue")} 
          className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-500 text-white'>
          Blue</button>
      </div>
    </div>
    </>
  )
}

export default App
