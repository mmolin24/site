import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">
            <span className="gradient-text">Melvin Molina</span>
          </h1>
          <p className="hero-title">Software Engineer</p>
          <p className="hero-description">
            Building scalable solutions at Capital One • 
            Passionate about clean code, automation, and mentoring
          </p>
        </div>
        <div className="hero-contact">
          <a href="mailto:melvinmmolina@gmail.com" className="contact-link">
            <span className="contact-icon">✉️</span>
            melvinmmolina@gmail.com
          </a>
          <a 
            href="https://www.linkedin.com/in/melvin-molina/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-icon">💼</span>
            LinkedIn
          </a>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
