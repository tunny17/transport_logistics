import React, { useRef } from 'react';
import './App.css';
// component imports
import { About, Banner, Blog, Contact, Header, Navbar, Project, Services, Team, Testimonial, WhyChoose } from './components'
import Footer from './components/Footer/Footer';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const App = () => {
  const containerRef = useRef(null);
  return (    
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        []
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Header />
        <Navbar />
        <Banner />
        <Services />
        <About />
        <Project />
        <Testimonial />
        <WhyChoose />
        <Team />
        <Contact />
        <Blog />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App