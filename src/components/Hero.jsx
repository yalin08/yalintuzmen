import React, { useEffect, useState } from 'react';
import '../style/Hero.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useTranslation();
  const [gradientPosition, setGradientPosition] = useState(0);

  const rootStyles = getComputedStyle(document.documentElement);
  const secondaryColor = rootStyles.getPropertyValue('--secondary-color');
  const primaryColor = rootStyles.getPropertyValue('--primary-color');

  useEffect(() => {
    const hero = document.querySelector('.hero');

    let currentPosition = -30;
    const interval = setInterval(() => {
      currentPosition += 1;

      if (currentPosition < 0) {
        hero.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 0%)`;
      } else {
        hero.style.background = `linear-gradient(135deg, ${primaryColor} ${currentPosition - 90}%, ${secondaryColor} ${currentPosition}%)`;
      }

      if (currentPosition > 190) {
        clearInterval(interval);
      } else {
        setGradientPosition(currentPosition);
      }
    }, []);

    return () => clearInterval(interval);
  }, [primaryColor, secondaryColor]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const elements = document.querySelectorAll('.hero__background-effect');

      if (event) {
        elements.forEach((element, index) => {
          const speed = element.getAttribute('data-speed') || 15;
          const translateX = (index + 1) * (window.innerWidth - event.pageX * speed) / 150;
          const translateY = (index + 1) * (window.innerHeight - event.pageY * speed) / 150;
          element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
        });
      } else {
        elements.forEach((element, index) => {
          const speed = element.getAttribute('data-speed') || 15;
          const translateX = (index + 1) * (window.innerWidth - 450 * speed) / 150;
          const translateY = (index + 1) * (window.innerHeight - 450 * speed) / 150;
          element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;

          element.style.width = 300 / (index + 1) + "px";
          element.style.height = 300 / (index + 1) + "px";
        });
      }
    };

    handleMouseMove();

    const hero = document.querySelector('.hero');

    hero.addEventListener('mousemove', (e) => {
      const mouseX = e.pageX - hero.offsetLeft;
      const mouseY = e.pageY - hero.offsetTop;

      hero.style.setProperty('--gradient-x', `${mouseX / 5 - hero.offsetLeft}px`);
      hero.style.setProperty('--gradient-y', `${mouseY / 5 - hero.offsetTop}px`);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__background-effect" data-speed="5"></div>
      <div className="hero__background-effect" data-speed="10"></div>
      <div className="hero__content">
        <h1>{t('heroSection.title')}</h1>
        <p>{t('heroSection.subtitle')}</p>
        <Link to="/projects" className="hero__button">{t('heroSection.buttonText')}</Link>
      </div>
    </section>
  );
};

export default HeroSection;
