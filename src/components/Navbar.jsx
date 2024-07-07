import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.scss'; // Stil dosyasını daha sonra oluşturacağız

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY + " " + window.innerHeight)
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
            <div className="navbar-brand">
                <a href="#home">My Portfolio</a>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
