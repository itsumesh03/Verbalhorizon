import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import RegisterSection from './components/RegisterSection';

import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <Features />
      <section id="courses">
        <Courses />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <RegisterSection />
      </section>
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
