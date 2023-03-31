import React from 'react';
import './App.css';
// component imports
import { About, Banner, Blog, Contact, Header, Project, Services, Team, Testimonial, WhyChoose } from './components'

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
    </div>
  )
}

export default App