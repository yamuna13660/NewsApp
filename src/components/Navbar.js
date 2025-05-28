import React from 'react';
import logo from './logo.png';
import './Home.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const mystyle = {
    color: "#ccc",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-section">
        <div className="container-fluid">
          <a className="navbar-brand brand-style" href="/">
            <img src={logo} alt="Logo" width="40" height="30" className="mx-1" />
            AlgoMate
          </a>

          {/* TOGGLER BUTTON */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={mystyle}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/practice" style={mystyle}>Practice</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about" style={mystyle}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact" style={mystyle}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
