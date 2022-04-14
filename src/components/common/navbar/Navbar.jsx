import React from 'react';

import './Navbar.css'
function Navbar () {

    return (
        <section className='navigation'>
            <a href="/" className="nav-item">Home</a>
            <a href="" className="nav-item">Search</a>
            <a href="" className="nav-item">Login</a>
            <a href="" className="nav-item">Contact</a>
            <a href="" className="nav-item">About</a>
        </section>
    )
}

export default Navbar;