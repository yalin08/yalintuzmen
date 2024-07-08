import React, { useEffect } from 'react';
import '../style/Hero.scss';

const HeroSection = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const elements = document.querySelectorAll('.hero__background-effect');
      elements.forEach((element) => {
        const speed = element.getAttribute('data-speed');
        const x = (window.innerWidth - event.pageX * speed) / 100;
        const y = (window.innerHeight - event.pageY * speed) / 100;
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__background-effect" data-speed="10"></div>
      <div className="hero__background-effect" data-speed="25"></div>
      <div className="hero__content">
        <h1>Welcome to My Portfolio</h1>
        <p>Your journey to discovering my work begins here.</p>
        <a href="#projects" className="hero__button">View My Work</a>
      </div>
    </section>
  );
};

export default HeroSection;