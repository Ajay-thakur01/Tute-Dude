import { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gray-700 h-full p-8'>
      <h1 className='text-center p-8 font-medium text-2xl text-purple-600'>All the cards are here</h1>
      <div className='grid grid-cols-3 gap-5'>

        <Cards card="Card 1" link="https://i.pinimg.com/736x/81/8b/f5/818bf5127a0c9bcd2e557add27a60630.jpg"/>
        <Cards card="Card 2" link="https://i.pinimg.com/736x/db/42/2f/db422fc99bfc6baa9dc70ca0dd0760ce.jpg"/>
        <Cards card="Card 3" link="https://i.pinimg.com/736x/5b/c2/83/5bc2837b51dbf0701c1f3045bd911932.jpg"/>
        <Cards card="Card 4" link="https://i.pinimg.com/736x/b5/e2/09/b5e209b35f5e3e2924ba8444c0fecb63.jpg"/>
        <Cards card="Card 5" link="https://i.pinimg.com/736x/ff/73/bc/ff73bc309f8512a2d53fae3049d6a3f0.jpg"/>
        <Cards card="Card 6" link="https://i.pinimg.com/736x/f9/18/3c/f9183cb51ada0ca3e1648e7ae405a395.jpg"/>
        <Cards card="Card 7" link="https://i.pinimg.com/1200x/8a/5f/49/8a5f4945d6a710d042df1b64f42f143b.jpg"/>
        <Cards card="Card 8" link="https://i.pinimg.com/736x/a9/51/2d/a9512dcb2a81c8c60cb38cdcc55f8376.jpg"/>
        <Cards card="Card 9" link="https://i.pinimg.com/736x/62/50/45/625045905de090efa52a4763468cdbd5.jpg"/>
        <Cards card="Card 10" link="https://i.pinimg.com/736x/75/eb/87/75eb87c40f03729b0f47d02faf512255.jpg"/>
        <Cards card="Card 11" link="https://i.pinimg.com/736x/ec/8b/23/ec8b23d6fd1d6e67822728f9c9910dc3.jpg"/>
        <Cards card="Card 12" link="https://i.pinimg.com/736x/39/95/af/3995afa95cb8f54d449c19e0ba967390.jpg"/>
        <Cards card="Card 13" link="https://i.pinimg.com/1200x/0c/1f/13/0c1f1322bd2c1de072433f9a6908f203.jpg"/>
        <Cards card="Card 14" link="https://i.pinimg.com/236x/b8/42/53/b84253f5a35893af863ad0fa711175e7.jpg"/>

      </div>
    </div>
    </>
  )
}

export default App
