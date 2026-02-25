import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slider from './components/Slider'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Slider />
    
    </>
  )
}

export default App
