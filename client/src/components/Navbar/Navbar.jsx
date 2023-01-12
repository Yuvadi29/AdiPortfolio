import React, { useState } from 'react';
import './Navbar.css';
import { AiFillHome, AiFillFile, AiFillCode, AiFillMessage, AiTwotoneAppstore } from 'react-icons/ai';
import { FaUserAlt, FaTimes } from 'react-icons/fa';
import { BsBagCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [isActive, setIsActive] = useState('home');

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
                            <li className="nav__item" onClick={() => setIsActive('home')}>
                                <a href="/"
                                    className='nav__link'
                                    style={(isActive === 'home') ? { color: 'var(--primary-color)' } : { color: 'var(--title-color)' }}
                                    onClick={closeNav}>
                                    <AiFillHome className='nav__icon'
                                    /> Home
                                </a>
                            </li>
                            <li className="nav__item" onClick={() => setIsActive('about')}>
                                <a href="#about" className='nav__link'
                                    style={(isActive === 'about') ? { color: 'var(--primary-color)' } : { color: 'var(--title-color)' }}
                                    onClick={closeNav}>
                                    <FaUserAlt className='nav__icon' /> About
                                </a>
                            </li>
                            <li className="nav__item" onClick={() => setIsActive('skills')}>
                                <a href="#skills" className='nav__link'
                                    style={(isActive === 'skills') ? { color: 'var(--primary-color)' } : { color: 'var(--title-color)' }}
                                    onClick={closeNav}>
                                    <AiFillFile className='nav__icon' /> Skills
                                </a>
                            </li>
                            <li className="nav__item" onClick={() => setIsActive('services')}>
                                <a href="#services" className='nav__link'
                                    style={(isActive === 'services') ? { color: 'var(--primary-color)' } : { color: 'var(--title-color)' }}
                                    onClick={closeNav}>
                                    <BsBagCheckFill className='nav__icon' /> Services
                                </a>
                            </li>
                            <li className="nav__item" onClick={() => setIsActive('portfolio')}>
                                <a href="#portfolio" className='nav__link'
                                    style={(isActive === 'portfolio') ? { color: 'var(--primary-color)' } : { color: 'var(--title-color)' }}
                                onClick={closeNav}>
                                    <AiFillCode className='nav__icon' /> Portfolio
                                </a>
                            </li>
                            <li className="nav__item" onClick={() => setIsActive('contact')}>
                                <a href="#contact" className='nav__link'
                                    style={(isActive === 'contact') ? { color: 'var(--primary-color)' } : { color: 'var(--title-color)' }} 
                                onClick={closeNav}>
                                    <AiFillMessage className='nav__icon' /> Contact
                                </a>
                            </li>
                        </ul>
                        <FaTimes className='nav__close' id='nav-close' onClick={toggleNav} />
                    </div>
                    <div className="nav__btns">
                        {/* Theme Change Button */}
                        
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