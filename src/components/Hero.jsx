import React from 'react';
import '../style/Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Yalın Tüzmen</h1>
        <p>I am a passionate developer with a love for creating amazing web experiences.</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
