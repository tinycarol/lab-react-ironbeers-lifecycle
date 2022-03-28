import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BeerPage from './Pages/Beer/index';
import BeerIDPage from './Pages/BeerID/index';
import RandomBeer from './Pages/RandomBeer';
import NewBeer from './Pages/NewBeer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="beer" element={<BeerPage />} />
        <Route exact path="beer/:id" element={<BeerIDPage />} />
        <Route exact path="random" element={<RandomBeer />} />
        <Route exact path="new-beer" element={<NewBeer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
