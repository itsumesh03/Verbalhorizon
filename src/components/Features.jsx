import React from 'react';
import styles from './Features.module.css';

const features = [
  {
    title: "Speaking Practice",
    text: "Interactive sessions to boost your fluency and confidence.",
    icon: "🎤",
  },
  {
    title: "Mock Tests",
    text: "Regular tests to track progress and simulate exam conditions.",
    icon: "📘",
  },
  {
    title: "AI Band Score",
    text: "Get instant feedback and predicted band score using AI.",
    icon: "🤖",
  },
  {
    title: "Personalized Study Plan",
    text: "Tailored schedules and resources based on your goals.",
    icon: "📅",
  },
];

const Features = () => {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose Us?</h2>
        <div className={styles.cards}>
          {features.map((f, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.text}>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
