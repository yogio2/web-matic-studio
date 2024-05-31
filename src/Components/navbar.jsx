import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './StyleJS/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faBarsStaggered, faCircleXmark, faUser } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const navigate = useNavigate();

    const toggleNav = () => {
        setShowNavbar(!showNavbar);
        console.log(showNavbar);
    }
    const NavtoHome = () => {
        // Navigate to another page
        navigate('/');
      };

    return (
        <nav className="Navigation">
            <div className="logo" onClick={NavtoHome}><h1 className="logo"><span>WEB MATIC </span>STUDIO</h1></div>
            <button onClick={toggleNav} className='nav-btn'><FontAwesomeIcon icon={faBarsStaggered}/></button>
            <div className={showNavbar? "BurgerMenu responsive_navbar" : "BurgerMenu"}>
            <div className="PageLinks">
                    <NavLink onClick={toggleNav} to="/" className="navBtn">Home</NavLink>
                    <NavLink onClick={toggleNav} to="/projects" className="navBtn">Projects</NavLink>
                    <NavLink onClick={toggleNav} to="/services" className="navBtn">Services</NavLink>
                    <NavLink onClick={toggleNav} to="/Creatives" className="navBtn">Creatives</NavLink>
                    <NavLink onClick={toggleNav} to="/contact" className="navBtn">Meet Now</NavLink>
                    {/* <NavLink onClick={toggleNav} to="/login" className="navBtn"><FontAwesomeIcon icon={faUser} /></NavLink> */}

                    <button onClick={toggleNav} className="nav-btn nav-close-btn"><FontAwesomeIcon icon={faCircleXmark} /></button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;