import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
                <span className={styles.logo}>Verbal</span>
                <span className={styles.accent}>Horizon</span>
              </div>
      <div className={styles.container}>
        
        {/* Contact Section */}
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="tel:+918059265332">📞 +91 8059265332</a>
            </li>
            <li>
              <a href="mailto:umeshsaini060@gmail.com">📧 umeshsaini060@gmail.com</a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Chandigarh"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 Chandigarh, India
              </a>
            </li>
          </ul>
        </div>

        {/* Links Section */}
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/Hero">Home</a>
            </li>
            <li>
              <a href="/Courses">Courses</a>
            </li>
            <li>
              <a href="/About">About Us</a>
            </li>
            <li>
              <a href="/*">Terms and Conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copy}>
           Copyright © {new Date().getFullYear()}  IELTS Institute. All rights reserved.
        </p>
    </footer>
  );
}
