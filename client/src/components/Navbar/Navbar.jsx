import React, { useState } from 'react';
import './Navbar.css';
import { AiFillHome, AiFillFile, AiFillCode, AiFillMessage, AiTwotoneAppstore } from 'react-icons/ai';
import { FaUserAlt, FaTimes } from 'react-icons/fa';
import { BsBagCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    const closeNav = () => {
        setIsOpen(true);
    }

    return (
        <div>
            <header className="header" id="header">
                <nav className="nav container">
                    <Link to="/" className="nav__logo">CodeLogo</Link>
                    <div className={`nav__menu ${isOpen ? 'show-menu' : ''}`} id="nav-menu" >
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="/" className='nav__link' onClick={closeNav}>
                                    <AiFillHome className='nav__icon'
                                    /> Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className='nav__link' onClick={closeNav}>
                                    <FaUserAlt className='nav__icon' /> About
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#skills" className='nav__link' onClick={closeNav}>
                                    <AiFillFile className='nav__icon' /> Skills
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className='nav__link' onClick={closeNav}>
                                    <BsBagCheckFill className='nav__icon' /> Services
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" className='nav__link' onClick={closeNav}>
                                    <AiFillCode className='nav__icon' /> Portfolio
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className='nav__link' onClick={closeNav}>
                                    <AiFillMessage className='nav__icon' /> Contact
                                </a>
                            </li>
                        </ul>
                        <FaTimes className='nav__close' id='nav-close' onClick={toggleNav} />
                    </div>
                    <div className="nav__btns">
                        <div className="nav__toggle" id='nav-toggle' onClick={toggleNav}>
                            <AiTwotoneAppstore className='nav__icon' />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;