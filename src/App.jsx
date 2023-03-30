import React from 'react';
import './App.css';
// component imports
import { About, Banner, Header, Project, Services } from './components'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <About />
      <Project />
    </div>
  )
}

export default App