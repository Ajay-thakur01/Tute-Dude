import React, { useContext, useState } from 'react'
import UserContext from "../context/UserContext";

function Login() {

    const [username, sertUserName] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password});
    };

  return (
    <div>
        <h3 className='text-xl bg-green-300 '>Login PAge</h3>
        <input type="text" placeholder='Username' value={username} 
        onChange={(e) => sertUserName(e.target.value)}/>
        <br />
        <input type="password" placeholder='Password' value={password}
        onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <button
        onClick={handleSubmit}>

            Submit
        </button>
        </div>
  )
}

export default Login