import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import BG from './assets/homepage-bg.jpg'

function App() {

  return (
      <div>
        
        <Navbar/>
        <img className='bg' src={BG} alt="Background Image"/>
      </div>
  )
}


export default App
