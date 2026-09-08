import React from 'react'

function Home() {
  return (
    <section className='bg-slate-100 py-20 h-screen flex justify-center items-center'>
      <div className='mx-auto max-w-6xl px-6'>
        <p className='mb-3 text-xl font-semibold uppercase tracking-[0.2em] text-cyan-600'>
          Welcome
        </p>
        <h1 className='mb-4 text-4xl font-bold text-slate-900 md:text-6xl'>
          Learning & Implimentation of React-Router DOM
        </h1>
        <p className='max-w-2xl text-lg text-slate-600'>
          This is a simple starter page created to demonstrate the basic structure of a
          React Router project with content sections and navigation.
        </p>
      </div>
    </section>
  )
}

export default Home
