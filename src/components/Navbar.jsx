import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pokelogo.png';

const Navbar = () => (
  <nav className="navbar">
    <Link className="logo-link" to="/">
      <img src={logo} className="nav-logo" alt="pokemon logo" />
    </Link>
  </nav>
);

export default Navbar;
