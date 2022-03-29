import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-info">
      <div className="container justify-content-md-center">
        <a className="navbar-brand" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="24"
            fill="white"
            className="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fillRule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
