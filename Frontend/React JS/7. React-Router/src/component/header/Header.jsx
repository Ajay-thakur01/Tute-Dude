import React from 'react'

function Header() {
  return (
    <header className='bg-slate-900 text-white shadow-md'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <div>
          <h1 className='text-2xl font-bold'>TravelMate</h1>
        </div>

        <nav className='flex items-center gap-6 text-sm font-medium'>
          <a href='/' className='transition hover:text-cyan-300'>Home</a>
          <a href='/about' className='transition hover:text-cyan-300'>About</a>
          <a href='/services' className='transition hover:text-cyan-300'>Services</a>
          <a href='/contact' className='transition hover:text-cyan-300'>Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header