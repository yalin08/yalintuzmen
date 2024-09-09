import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../style/Navbar.scss'; // Stil dosyasını daha sonra oluşturacağız

const Navbar = () => {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : 'notScrolled'} ${isOpen ? 'open' : ''}`}>

            <div className="navbar__toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="navbar__links">
                <li><Link to="/">{t('navbar.home')}</Link></li>
                <li><Link to="/about">{t('navbar.about')}</Link></li>
                <li><Link to="/projects">{t('navbar.projects')}</Link></li>
                <li><Link to="/blog">{t('navbar.blog')}</Link></li>
                <li><Link to="/contact">{t('navbar.contact')}</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
