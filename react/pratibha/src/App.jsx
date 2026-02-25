import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Fruits from './components/fruits'
import Product from './components/Product'
import Users from './components/Users'
import Post from './components/Post'
import Hero from './components/Hero'
import Home from './components/Home'
import Footer from './components/Footer'
import ThemeChanger from './components/ThemeChanger'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>Welcome</h1> */}

    {/* <Fruits /> */}
    {/* < Product />
    < Users /> */}
    {/* < Post /> */}
    <ThemeChanger>
      <Hero />
     <Home />
      <Footer />
    </ThemeChanger>
    

      
    </>
    
  )
}

export default App
