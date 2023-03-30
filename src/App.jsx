import React from 'react';
import './App.css';
// component imports
import { About, Banner, Header, Project, Services, Testimonial } from './components'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <About />
      <Project />
      <Testimonial />
    </div>
  )
}

export default App