import React from 'react';
import './App.css';
// component imports
import { About, Banner, Header, Services } from './components'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <About />
    </div>
  )
}

export default App