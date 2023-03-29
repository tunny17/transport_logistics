import React from 'react';
import './App.css';
// component imports
import { Banner, Header, Services } from './components'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
    </div>
  )
}

export default App