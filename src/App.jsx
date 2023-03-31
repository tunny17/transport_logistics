import React from 'react';
import './App.css';
// component imports
import { About, Banner, Blog, Contact, Header, Project, Services, Team, Testimonial, WhyChoose } from './components'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
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
    </div>
  )
}

export default App