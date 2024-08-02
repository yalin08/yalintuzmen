import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import NotFound from './components/NotFound.jsx';
import Footer from './components/Footer.jsx';
import PostList from './components/Blog/PostList.jsx';
import { ApiContextProvider } from "./Context/ApiContext.jsx";
import LoadingPage from './components/LoadingPage.jsx';
import Card from './components/Blog/Card.jsx';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/post/:id" element={<Card />} />
          <Route path="/blog/*" element={<PostList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ApiContextProvider>
  </React.StrictMode>
);
