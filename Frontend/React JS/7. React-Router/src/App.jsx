import './App.css'
import Header from './component/header/Header'
import Home from './component/Home/home'
import About from './component/About/about'
import Contact from './component/Contact/constact'
import Github from './component/Github/github'
import Footer from './component/footer/Footer'

function App() {
  return (
    <div className='min-h-screen bg-white text-slate-800'>
      <Header />
      <main>
        <Home />
        <About />
        <Contact />
        <Github />
      </main>
      <Footer />
    </div>
  )
}

export default App
