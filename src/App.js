import { Route, Routes } from 'react-router-dom';
import React from 'react';
import BeerList from './components/BeersList';



function App() {
  return (
    <div className="App">
     <nav className="nav" >
          <img src="/pngfind.com-white-house-logo-png-5898244.png" alt="logo" width={35}></img>
     </nav>
    <BeerList/>
    </div>
  );
}

export default App;
