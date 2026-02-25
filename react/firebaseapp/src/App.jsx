import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Userindex from './assets/User/Userindex'
import Adminindex from './assets/Admin/Adminindex'
import Productindex from './assets/Admin/Product/Productindex'
import Adminproduct from './assets/Admin/Product/Adminproduct'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
            <Route path='/' element={<Userindex/>}></Route>
            <Route path='/admin' element={<Adminindex/>}></Route>
            <Route path='/admin/product/create' element={<Productindex/>}></Route>
            <Route path='/admin/product' element={<Adminproduct/>}></Route>
           
        </Routes>
    </>
  )
}

export default App
