import React from 'react';
import './App.css';
// component imports
import { About, Banner, Contact, Header, Project, Services, Team, Testimonial, WhyChoose } from './components'

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
    </div>
  )
}

export default App