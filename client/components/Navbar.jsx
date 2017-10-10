import React from 'react';
import { Link } from 'react-router-dom';

import './../styles/Navbar.scss';

const Navbar = () => (
  <nav className="nav">
    <div className="inner-nav">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/topics">Topics</Link>
    </div>
  </nav>
);

export default Navbar;
