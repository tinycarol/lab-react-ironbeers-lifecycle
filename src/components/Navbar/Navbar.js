import React from 'react';
import './Navbar.css';
import logo from '../../assets/Img/casaimagen.png'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-primary">
        <div className="container">
          <a className="navbar-brand fa fa-home" href="#">
            <img
              src={logo}
              alt=""
              width="30"
              height="24"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
