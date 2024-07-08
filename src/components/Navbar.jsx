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
            <div className="navbar__logo">
                <a href="/">MyPortfolio</a>
            </div>
            <ul className="navbar__links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
