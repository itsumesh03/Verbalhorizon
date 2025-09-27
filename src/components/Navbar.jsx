import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logoimg1.png'; // adjust the path based on your folder structure

import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Courses', to: 'courses' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Reviews', to: 'testimonials' },
    { name: 'Register', to: 'contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Brand Logo */}
        <div className={styles.brand}>
          <Link to="home" smooth={true} duration={500} offset={-70} className={styles.logoWrapper}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
          <span className={styles.logotext}>Verbal</span>
          <span className={styles.accent}>Horizon</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className={`${styles.nav} ${open ? styles.mobileOpen : ''}`}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <div className={styles.actions}>
  <a
    href="tel:+919876543210" // <-- your phone number here
    className={styles.appointmentBtn}
  >
    Get Appointment
  </a>
</div>

      </div>
    </header>
  );
};

export default Navbar;
