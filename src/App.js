import React from 'react';
import './App.css';
import BeerList from './components/BeerList/BeerList';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        <BeerList></BeerList>
      </div>
    </>
  );
}

export default App;
