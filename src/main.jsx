import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <Navbar />


    <Hero />
    <Hero />
  </React.StrictMode>,
)
