import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './context/theme'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => setThemeMode('light')
  const darkTheme = () => setThemeMode('dark')

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          themeMode === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-200 text-slate-900'
        }`}
      >
        <div className='mx-auto flex min-h-screen max-w-sm items-center justify-center px-4'>
          <div className='w-full'>
            <div className='mb-4 flex justify-end'>
              <ThemeBtn />
            </div>

            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
