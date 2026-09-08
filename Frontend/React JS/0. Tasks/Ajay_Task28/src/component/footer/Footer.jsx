import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-slate-900 py-6 text-slate-300'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row'>
        <p>© 2026 TravelMate</p>
        <div className='flex gap-4 text-sm'>
          <Link to='/' className='hover:text-white'>Home</Link>
          <Link to='/about' className='hover:text-white'>About</Link>
          <Link to='/contact' className='hover:text-white'>Contact</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer