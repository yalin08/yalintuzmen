import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import NotFound from './components/NotFound.jsx';
import Footer from './components/Footer.jsx';
import PostList from './components/Blog/PostList.jsx';
import { ApiContextProvider } from "./Context/ApiContext.jsx";
import LoadingPage from './components/LoadingPage.jsx';
import Card from './components/Blog/Card.jsx';
import About from './components/About.jsx';
import './i18n';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Clear all previous background classes
    document.body.className = '';

    // Add new background class based on the current route
    switch (location.pathname) {
      case '/':
        document.body.classList.add('home-background');
        break;
      case '/about':
        document.body.classList.add('about-background');
        break;
      case '/loading':
        document.body.classList.add('loading-background');
        break;
      case '/post/:id':
        document.body.classList.add('post-background');
        break;
      case '/blog':
        document.body.classList.add('blog-background');
        break;
      default:
        document.body.classList.add('default-background'); // Optional: Define a default background
        break;
    }




  }, [location]);


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Card />} />
        <Route path="/blog/*" element={<PostList />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiContextProvider>
  </React.StrictMode>
);
