import React from 'react'
import './Nav.css'



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BeersList</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active me-3">
            <a className="nav-link" href="/beers">Beers <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link" href="/random-beer">Random Beer</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/new-beer">New beer</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav