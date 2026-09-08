import './App.css'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='min-h-screen bg-white text-slate-800'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
