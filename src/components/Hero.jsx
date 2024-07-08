import React, { useEffect, useState } from 'react';
import '../style/Hero.scss';

const HeroSection = () => {
  const [gradientPosition, setGradientPosition] = useState(0);


  const rootStyles = getComputedStyle(document.documentElement);
  const secondaryColor = rootStyles.getPropertyValue('--secondary-color');
  const primaryColor = rootStyles.getPropertyValue('--primary-color');
  useEffect(() => {
    let currentPosition = -30;
    const interval = setInterval(() => {
      currentPosition += 1;

      const heroSection = document.querySelector('.hero');
      if (currentPosition < 0) {
        heroSection.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 0%)`;
      } else {
        heroSection.style.background = `linear-gradient(135deg, ${primaryColor} ${currentPosition - 90}%, ${secondaryColor} ${currentPosition}%)`;
      }

      if (currentPosition > 190) {
        clearInterval(interval);
      } else {
        setGradientPosition(currentPosition);
      }
    }, 9);

    return () => clearInterval(interval);
  }, [primaryColor, secondaryColor]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const elements = document.querySelectorAll('.hero__background-effect');
      const x = event ? event.clientX / window.innerWidth : 0;
      const y = event ? event.clientY / window.innerHeight : 0;

      elements.forEach((element) => {
        const speed = element.getAttribute('data-speed');
        const translateX = (window.innerWidth - (event ? event.pageX : 0) * speed) / 150;
        const translateY = (window.innerHeight - (event ? event.pageY : 0) * speed) / 150;
        element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
      });
    };

    handleMouseMove();
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <section className="hero">
      <div className="hero__background-effect" data-speed="10"></div>
      <div className="hero__background-effect" data-speed="30"></div>
      <div className="hero__content">
        <h1>Welcome to My Portfolio</h1>
        <p>Your journey to discovering my work begins here.</p>
        <a href="#projects" className="hero__button">View My Work</a>
      </div>
    </section>
  );
};

export default HeroSection;
