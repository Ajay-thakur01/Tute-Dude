import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(10)

  // let counter = 10;

  const addValue = () => {
    setCounter(counter++)
  }

  const removeVAlue = () => {
    setCounter(counter--)
  }

  return (
 <>
 <h1>Hey everyone we are here to undersatnt Hooks in React </h1>
 <h4>Counter : {counter}</h4>
 <h4>Counter : {counter}</h4>
 <h4>Counter : {counter}</h4>
 <h4>Counter : {counter}</h4>


 <button onClick={addValue}>Increment by 1</button>
 <button onClick={removeVAlue}>Decrement by 1</button>
 </>
  )
}

export default App
