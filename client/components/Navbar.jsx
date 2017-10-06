import React from 'react';
import { Link } from 'react-router-dom';

import './../styles/Navbar.scss';

const Navbar = () => (
  <nav className="nav">
    <div className="inner-nav">
      <div className="nav-left">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/topics">Topics</Link>
      </div>
      <a className="logo-link" href="#">
        <div className="logo-container">
          <img src="/85e7cbe7243c747cbb892b057696c650.svg" alt="branding" />
          <img src="/07dffd7212678d0ecaaf938c708c4db3.svg" alt="logo" />
        </div>
      </a>
      <div className="nav-right">
        <a href="#" className="nav-login">Log In</a>
        <button type="submit" className="nav-signup">Sign Up</button>
      </div>
    </div>
  </nav>
);

export default Navbar;
