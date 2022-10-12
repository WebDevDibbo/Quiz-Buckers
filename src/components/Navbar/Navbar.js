import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
        <div className='navbar'>
            <h2>Quiz Buckers</h2>
            <div>
            <Link className='navlink' to='/'>Home</Link>
            <Link className='navlink' to='/statistics'>Statistics</Link>
            <Link className='navlink' to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Navbar;