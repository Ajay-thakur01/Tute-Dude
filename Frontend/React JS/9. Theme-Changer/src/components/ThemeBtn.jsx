import useTheme from '../context/theme'

function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme()

  const handleToggle = (event) => {
    const darkModeStatus = event.currentTarget.checked

    if (darkModeStatus) {
      darkTheme()
    } else {
      lightTheme()
    }
  }

  return (
    <label className='flex cursor-pointer items-center gap-3 rounded-full bg-white/80 px-3 py-2 shadow-sm ring-1 ring-slate-200'>
      <span className='text-sm font-medium text-slate-700'>Toggle Theme</span>

      <span className='relative inline-block h-6 w-11 rounded-full bg-slate-300 transition-colors duration-300'>
        <input
          type='checkbox'
          checked={themeMode === 'dark'}
          onChange={handleToggle}
          className='peer sr-only'
        />

        <span
          className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white shadow transition-transform duration-300 ${
            themeMode === 'dark' ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </span>
    </label>
  )
}

export default ThemeBtn