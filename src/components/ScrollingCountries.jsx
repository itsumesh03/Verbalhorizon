// src/components/ScrollingCountries.jsx
import React from "react";
import styles from "./ScrollingCountries.module.css";

const countries = [
  "INDIA",
  "USA",
  "UK",
  "GERMANY",
  "CANADA",
  "AUSTRALIA",
  "JAPAN",
  "FRANCE",
  "ITALY",
  "BRAZIL",
];

export default function ScrollingCountries() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {/* Duplicate countries list for seamless scrolling */}
          {[...countries, ...countries].map((country, idx) => (
            <span key={idx} className={styles.item}>
              {country} <span className={styles.star}>★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

