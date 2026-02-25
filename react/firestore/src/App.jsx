import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Productindex from './assets/Admin/Product/Productindex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Routes>
        <Route path='/admin/product/create' element={<Productindex/>}></Route>
        

      </Routes>
    </>
  )
}

export default App
