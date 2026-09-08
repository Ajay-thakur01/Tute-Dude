import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `transition hover:text-cyan-300 ${isActive ? 'text-cyan-300' : ''}`

function Header() {
  return (
    <header className='bg-slate-900 text-white shadow-md'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <div>
          <h1 className='text-2xl font-bold'>TravelMate</h1>
        </div>

        <nav className='flex items-center gap-6 text-sm font-medium'>
          <NavLink to='/' className={navLinkClass}>Home</NavLink>
          <NavLink to='/about' className={navLinkClass}>About</NavLink>
          <NavLink to='/contact' className={navLinkClass}>Contact</NavLink>
          <NavLink to='/github' className={navLinkClass}>GitHub</NavLink>
        </nav>

        <nav className='flex gap-4 font-medium'>
          <NavLink to='/login' className={({isActive}) => 
          `px-4 py-2 rounded-md transition ${
            isActive
            ? "bg-black text-green-400 shadow-sm shadow-emerald-300"
            : "text-white hover:bg-blue-400 hover:text-gray-800"
            }`
          }>
          Login</NavLink>
          
          <NavLink to='/signup' className={({isActive}) => 
          `px-4 py-2 rounded-md transition ${
            isActive
            ? "bg-black text-green-400 shadow-sm shadow-emerald-300"
            : "text-white hover:bg-blue-400 hover:text-gray-800"
            }`
            }>
            Sign Up</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header