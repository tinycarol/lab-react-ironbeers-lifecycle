import React from 'react';
import './App.css';
import BeerList from "./components/BeerList/BeerList"
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <BeerList />
    </div>
  );
}

export default App;
