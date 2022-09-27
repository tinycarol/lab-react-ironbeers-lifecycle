import React from 'react';
import Navbar from './components/Navbar/Nabvar'

import './App.css';
import BeerList from './components/BeerList/BeerList';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BeerList>
        
      </BeerList>
    </div>
  );
}

export default App;
