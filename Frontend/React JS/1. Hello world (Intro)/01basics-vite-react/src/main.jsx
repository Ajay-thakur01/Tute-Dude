import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function customApp() {

//   return (
//     <>

//       <h1>Hello world | Ajay Thakur</h1>
//       <p>hey its a paragrapgh tag</p>
//     </>
//   )
// }


const customRreactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    content: "click on me to navigate Google page"
}

const anotherElement = (
    <a href="https://google.com" target = "_blank" >click on me to navigate Google page</a>
)

createRoot(document.getElementById('root')).render(
    // <customApp />
    // customApp()
    // customRreactElement()
    // anotherElement()
    anotherElement
)
