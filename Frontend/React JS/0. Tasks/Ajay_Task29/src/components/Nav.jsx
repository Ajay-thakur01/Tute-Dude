import React from 'react'

function Nav() {
  return (
    <div>
        <nav className='flex p-8 bg-gray-200 items-center'>
        <div className="rounded-full size-20 shadow-xl shadow-red-500 mr-15">
          <img className='object-cover rounded-full'
           src="https://i.pinimg.com/1200x/f7/41/7c/f7417c358fa3f254bc0b84e0e88e07cc.jpg" alt="" />
        </div>
        <div className='flex gap-5 font-medium text-xl'>
          <ul><a href="#">Home</a></ul>
          <ul><a href="#">Categories</a></ul>
          <ul><a href="#">About Us</a></ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav