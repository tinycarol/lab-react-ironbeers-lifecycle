import React from 'react';
import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BeerList from './components/BeerList/BeerList';


class App extends Component {

  

  render() {
    return (
      <div className="App text-start">
        <Navbar />
       <div>
         <BeerList/>
       </div>
      </div>
    );
  }
}

export default App;
