import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
            <Link to="/welcome" className="nav-link"> Add Product </Link>
            </div>
        </nav>
    );
}

export default Navbar;
