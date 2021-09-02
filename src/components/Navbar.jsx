import React from 'react';
import logo from '../assets/pokelogo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="nav-logo" to={'/'}>
                <img src={logo} className="nav-logo" alt="pokemon logo"/>
            </Link>
        </nav>
    )
}

export default Navbar