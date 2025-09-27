import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: "Aarav Sharma",
    review:
      "The speaking practice sessions were amazing! I improved my fluency a lot and gained confidence before the real test.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Kapoor",
    review:
      "The mock tests gave me a real exam experience. I scored Band 7.5 on my first attempt. Highly recommend this institute!",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Mehta",
    review:
      "The AI band score predictor helped me identify weak areas. The personalized plan really worked for me!",
    photo: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <h2 className={styles.heading}>What Our Students Say</h2>
        <div className={styles.cards}>
          {testimonials.map((t, idx) => (
            <div key={idx} className={styles.card}>
              <img src={t.photo} alt={t.name} className={styles.photo} />
              <p className={styles.review}>"{t.review}"</p>
              <h4 className={styles.name}>— {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
