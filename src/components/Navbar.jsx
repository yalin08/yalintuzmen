import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.scss'; // Stil dosyasını daha sonra oluşturacağız

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= window.innerHeight / 2) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (


        <nav className={`navbar ${isScrolled ? 'scrolled' : 'notScrolled'}`}>
            <div className="navbar__logo">
                <a href="/">MyPortfolio</a>
            </div>
            <ul className="navbar__links">
                <li><Link to="">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/blog">Blog</Link></li>

                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
