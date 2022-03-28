import React from 'react';
import './App.css';
import BeerList from './components/BeerList/BeerList';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BeerList/>
    </div>
  );
}

export default App;
