import { useState } from 'react'

import './style.css'
import Fruits from './assets/Components/Fruits'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Tailwind App</h1>

       <Fruits />
     
    
    </>
  )
}

export default App
