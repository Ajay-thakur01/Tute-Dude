import { useState } from 'react'
import './App.css'
import UserContextProvider from "./context/UserContextProvider";
import Login from "./component/Login";
import Profile from "./component/Profile";

function App() {

  return (
    <UserContextProvider>
      <h4 className='text-center'>React Context</h4>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
