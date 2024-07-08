import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import NotFound from './components/NotFound.jsx';
import Footer from './components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    {/* <Navbar />
    <Hero /><Hero />*/}
    <BrowserRouter>


      <Navbar />

      <Routes>

        <Route path="" element={<Hero />} />
        <Route path="" element={<Hero />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
    </BrowserRouter>



  </React.StrictMode>
)
