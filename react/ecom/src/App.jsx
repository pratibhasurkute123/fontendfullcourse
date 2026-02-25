import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Product from './assets/components/Product'
import Services from './assets/components/Services'
import Gallary from './assets/components/Gallary'
import Home from './assets/components/Home'
import Navbar from './assets/components/Navbar'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

       <Navbar />


        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/service' element={<Services />}></Route>
          <Route path='/gallary' element={<Gallary />}></Route>
          



        </Routes>
      
       
      
    </>
    
  )
}

export default App
