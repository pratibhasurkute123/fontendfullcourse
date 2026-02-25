import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Contact from './assets/components/Contact'
import Service from './assets/components/Service'
import Menu from './assets/components/Menu'
import Hero from './assets/components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <Hero />

      <Routes>
       <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact/>}></Route> 
      <Route path='/menu' element={<Menu/>}></Route>   
    <Route path='/service' element={<Service/>}></Route>   

  
             </Routes>
      
    </>
  )
}

export default App
