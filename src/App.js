import React from 'react';

import './App.css';
import { Route, Routes } from "react-router-dom";
import { BeersList } from './components/BeersList';
import { Nav } from './views/nav';
import { Home } from './views/Home';
import { BeerDetail } from './views/BeerDetail';
import { RamdonBeer } from './views/RamdonBeer';

function App() {
  return (
    <div className="App">

    <Nav/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="beers" element={<BeersList />} />
    <Route path="beers/:beerId" element={<BeerDetail />} />
    <Route path='/beers/random-beer' element={<RamdonBeer />}/>
    </Routes>
    </div>
  );
}

export default App;
