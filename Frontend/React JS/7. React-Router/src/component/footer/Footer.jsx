import React from 'react'

function Footer() {
  return (
    <footer className='bg-slate-900 py-6 text-slate-300'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row'>
        <p>© 2026 TravelMate</p>
        <div className='flex gap-4 text-sm'>
          <a href='/' className='hover:text-white'>Home</a>
          <a href='/about' className='hover:text-white'>About</a>
          <a href='/contact' className='hover:text-white'>Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer