import React from 'react';
import './App.css';

import { BeersList } from './components/BeerList';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <BeersList />
    </div>
  );
}

export default App;
