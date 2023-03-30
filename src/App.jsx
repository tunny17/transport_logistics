import React from 'react';
import './App.css';
// component imports
import { About, Banner, Header, Project, Services, Testimonial, WhyChoose } from './components'

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
    </div>
  )
}

export default App