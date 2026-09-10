import useTheme from '../context/theme'

function Card() {
  const { themeMode } = useTheme()
  const isDark = themeMode === 'dark'

  return (
    <div
      className={`overflow-hidden rounded-[22px] border shadow-[0_20px_45px_rgba(15,23,42,0.12)] ${
        isDark ? 'border-slate-700 bg-slate-800 text-white' : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <div className='p-3'>
        <img
          src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'
          alt='Apple Watch'
          className='h-56 w-full rounded-[18px] object-cover'
        />
      </div>

      <div className='px-4 pb-4'>
        <h2 className='text-lg font-semibold leading-snug'>
          Apple Watch Series 7 GPS, Aluminium Case
        </h2>
        <p className={`mt-1 text-sm ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
          Case Starlight Sport
        </p>

        <div className='mt-3 flex items-center gap-2'>
          <div className='flex text-yellow-400'>
            {'★★★★★'}
          </div>
          <span className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
            4.0
          </span>
        </div>

        <div className='mt-4 flex items-center justify-between'>
          <span className='text-3xl font-bold'>$599</span>
          <button className='rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-violet-600'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card