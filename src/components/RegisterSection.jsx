// src/components/RegisterSection.jsx
import React, { useState, useEffect, useRef } from "react";
import styles from "./RegisterSection.module.css";

import img1 from "../assets/reg1.png";
import img2 from "../assets/reg2.webp";
import img3 from "../assets/reg5.png";

const images = [img1, img2, img3];

export default function RegisterSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // start auto sliding
  const startAuto = () => {
    // clear existing interval if any
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  // manual controls
  const goTo = (i) => {
    setCurrent(i);
    startAuto(); // restart timer so user has time to read
  };
  const prev = () => {
    setCurrent((p) => (p - 1 + images.length) % images.length);
    startAuto();
  };
  const next = () => {
    setCurrent((p) => (p + 1) % images.length);
    startAuto();
  };

  // pause while hovering
  const handleMouseEnter = () => clearInterval(intervalRef.current);
  const handleMouseLeave = () => startAuto();

  return (
    <section className={styles.register}>
      <div className={styles.container}>
        {/* LEFT: Carousel (70%) */}
        <div
          className={styles.carouselWrapper}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className={`${styles.slide} ${i === current ? styles.activeSlide : ""}`}
              aria-hidden={i !== current}
            >
              <img src={src} alt={`Slide ${i + 1}`} className={styles.image} />
            </div>
          ))}

          {/* prev/next buttons */}
          <button className={styles.prev} onClick={prev} aria-label="Previous slide">
            ‹
          </button>
          <button className={styles.next} onClick={next} aria-label="Next slide">
            ›
          </button>

          {/* dots */}
          <div className={styles.dots}>
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === current ? styles.activeDot : ""}`}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Form (30%) */}
        <aside className={styles.formWrapper}>
          <h2 className={styles.title}>Register for IELTS exam</h2>
          <p className={styles.subtitle}>
            Most reliable English proficiency test. IELTS on computer — results in 1 day.
            140+ test locations near you.
          </p>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <select className={styles.input} aria-label="Test type">
              <option value="">Test type</option>
              <option>IELTS Academic</option>
              <option>IELTS General Training</option>
            </select>

            <select className={styles.input} aria-label="Test format">
              <option value="">Test format</option>
              <option>Computer-delivered</option>
              <option>Paper-based</option>
            </select>

            <select className={styles.input} aria-label="Test city">
              <option value="">Test city</option>
              <option>Chandigarh</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>
{/* 
            <input className={styles.input} type="text" placeholder="Full name" required />
            <input className={styles.input} type="email" placeholder="Email address" required />
            <input className={styles.input} type="tel" placeholder="Phone number" /> */}

            <button type="submit" className={styles.button}>
              Check availability
            </button>
          </form>
        </aside>
      </div>
    </section>
  );
}
