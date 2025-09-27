import React from 'react';
import styles from './Hero.module.css';
import ScrollingCountries from './ScrollingCountries';
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        {/* Text Content */}
        <div className={styles.textContent}>
          <h1 className={styles.heading}>
            Crack IELTS with <span className={styles.highlight}>Confidence</span>
          </h1>
          <p className={styles.subtext}>
            Join thousands of students achieving their dream band scores with expert guidance, 
            mock tests, and AI-powered learning tools.
          </p>
          <button className={styles.cta}>Get Started</button>
        </div>

        {/* Image / Banner */}
        <div className={styles.imageWrapper}>
          <img
            src={hero}
            alt="Students preparing for IELTS"
            className={styles.image}
          />
        </div>
      </div>
      <ScrollingCountries />
    </section>
   

  );
};

export default Hero;
