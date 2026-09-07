import React from 'react'

function Contact() {
  return (
    <section className='mx-auto max-w-6xl px-6 py-16'>
      <h2 className='mb-4 text-3xl font-bold text-slate-800'>Contact</h2>
      <p className='mb-6 text-slate-600'>
        Have a question or want to work together? Send us a message and we will get back
        to you soon.
      </p>

      <div className='rounded-lg border border-slate-200 bg-white p-6 shadow-sm'>
        <p className='mb-2'><strong>Email:</strong> hello@example.com</p>
        <p className='mb-2'><strong>Phone:</strong> +1 (234) 567-890</p>
        <p><strong>Location:</strong> New York, USA</p>
      </div>
    </section>
  )
}

export default Contact
