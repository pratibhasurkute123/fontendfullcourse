import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Counter from '../components/Counter'


function App() {
  const [count, setCount] = useState(0)
  const username = "Pratibha";
  const Todo = [{id:1,title:"Python"},{id:2,title:"React"}]

  return (
    <>
    <Navbar />
      <h1>My First React App</h1>
      <p>Welcome :{username}</p>
      <Home name ={username} Todo={Todo}/>

      <Counter />

      <Footer />
       
    </>

  )
}

export default App
