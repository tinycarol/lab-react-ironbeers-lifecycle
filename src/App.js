import React from 'react';

import './App.css';
import { Route, Routes } from "react-router-dom";
import { BeersList } from './components/BeersList';
import { Nav } from './components/nav';
import { Home } from './components/Home';
import { BeerDetail } from './components/BeerDetail';

function App() {
  return (
    <div className="App">

    <Nav/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="beers" element={<BeersList />} />
    <Route path="beers/:beerId" element={<BeerDetail />} />
    </Routes>
    </div>
  );
}

export default App;
