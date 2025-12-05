import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex'>
     <h1 className=' flex-auto flex-wrap text-amber-800, p-6 bg-center bg-emerald-300 '>Bienvenidos </h1> 
     <h5 className=' flex-5 text-4xl text-cyan-600 bg-bottom-left bg-indigo-300'>React with JS</h5>
    </div>
    </>
  )
}

export default App
