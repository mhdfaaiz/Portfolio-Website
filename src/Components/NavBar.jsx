import React from 'react'
import './NavBar.css'
import { Link, useLocation } from 'react-router-dom'


function NavBar() {

    const location = useLocation();

    const isStyledPage = location.pathname === '/about' || location.pathname === '/project' || location.pathname === '/contact';

    const navbarStyle = {
        backgroundColor: isStyledPage ? 'white' : 'transparent',
        color: isStyledPage ? '#7f7f5e' : 'white',
    };
    return (
        <div style={navbarStyle} className='nav'>
            <Link className='links' style={{ color: navbarStyle.color }} to="/"><h4>Home</h4></Link>
            <Link className='links' style={{ color: navbarStyle.color }} to="/about"><h4>About</h4></Link>
            <Link className='links' style={{ color: navbarStyle.color }} to="/project"><h4>Projects</h4></Link>
            <Link className='links' style={{ color: navbarStyle.color }} to="/contact"><h4>Contact</h4></Link>
        </div>
    )
}

export default NavBar
