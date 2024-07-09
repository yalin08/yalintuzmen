import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import NotFound from './components/NotFound.jsx';
import Footer from './components/Footer.jsx';
import PostList from './components/Blog/PostList.jsx';
import { ApiContextProvider } from "./Context/ApiContext.jsx";
import LoadingPage from './components/LoadingPage.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    {/* <Navbar />
    <Hero /><Hero />*/}
    <ApiContextProvider>
      <BrowserRouter>


        <Navbar />

        <Routes>

          <Route path="/" element={<Hero />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path='/blog' element={<PostList />} />
          <Route path="*" element={<NotFound />} />

        </Routes>

        <Footer />
      </BrowserRouter>

    </ApiContextProvider>


    {/*    */}



  </React.StrictMode>
)
