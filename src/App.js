import React from 'react';
import './App.css';
import ListBeer from './components/ListBeer/ListBeer';
import Navbar from './components/misc/Navbar/Navbar';

function App() {
  return (
    <div className="App">

    <Navbar />
    <ListBeer />

    </div>
  );
}

export default App;
