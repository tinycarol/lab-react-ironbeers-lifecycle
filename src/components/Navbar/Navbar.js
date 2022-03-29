import React from "react";
import home from '../../images/home.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div>
        <img className="home-icon" src={home} alt="home"/>
        </div>
      </div>
    </>
  )
}

export default Navbar;
