import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Home() {
    const {theme,setTheme}=useContext(ThemeContext)
  return (
    <div>
        <h2>Welcome to tops</h2>
    </div>
  )
}

export default Home