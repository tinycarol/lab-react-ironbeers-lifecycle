import React from 'react';

import './App.css';
import { BeersList } from './components/BeersList';
import { Nav } from './components/nav';

function App() {
  return (
    <div className="App">
    <Nav/>
    <BeersList/>
    </div>
  );
}

export default App;
