import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/beer">beers</Link>
      <Link to="/random">random</Link>
      <Link to="/new-beer">new beer</Link>
    </div>
  );
}

export default App;
