import React from 'react';
import BeerList from './Components/BeerList/BeerList';
import houseLogo from "./Assets/Img/pngfind.com-white-house-logo-png-5898244.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="blue-header">
        <img src={houseLogo}/>
      </div>
      < BeerList />
    </div>
  );
}

export default App;
