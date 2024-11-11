import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import "../components-css/navbar.css";
import { Fade } from 'react-awesome-reveal';

const Navbar = () => {
    const [activeState, setActiveState] = useState(0);
    const [sticky, setSticky] = useState(false);
    const stickyNavigaion = () => {
        setSticky(window.scrollY >= 150)
    }
    useEffect(() => {
        window.addEventListener('scroll', stickyNavigaion);
        return () => {
            window.removeEventListener('scroll', stickyNavigaion)
        }
    }, [])
    const navItems = [
        { name: "home", path: "/" },
        { name: "Who we are", path: "/about" },
        { name: "What we do", path: "/service" },
        { name: "Gallery", path: "/gallery" },
        { name: "Blog", path: "/blog" },
        { name: "Volunteers", path: "/volunteers" },
        { name: "Contact Us", path: "/contact" }
    ];

    const handleMouseOver = (index) => {
        setActiveState(index);
    };

    return (
        <div className={`nav-bar-section ${sticky ? 'navigaion-fixed' : ''}`}>
            <div className='nav-bar-inner-content container'>
                <div className='logo'>
                    <Link to="/">
                        <img className='img-logo' src={logo} alt='logo' />
                        <h6>Skyraan Trust</h6>
                    </Link>
                </div>
                <div className='navigation'>
                    <ul>
                        <Fade cascade damping={0.1}>
                            {navItems.map((item, index) => (
                                <li key={index} className={`${activeState === index ? 'active' : ''} text-capitalize`}>
                                    <Link
                                        onClick={() => handleMouseOver(index)}
                                        className='text-decoration-none'
                                        to={item.path}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </Fade>
                    </ul>
                </div>
                <div className='donate'>
                    <button className='donate-btn btn text-capitalize' type="button">
                        donate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
