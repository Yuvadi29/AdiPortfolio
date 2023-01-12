import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { AiFillHome, AiFillFile, AiFillCode, AiFillMessage, AiTwotoneAppstore } from 'react-icons/ai';
import { FaUserAlt, FaTimes } from 'react-icons/fa';
import { BsBagCheckFill } from 'react-icons/bs';
import { CgDarkMode } from 'react-icons/cg';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');


    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);


    const [isActive, setIsActive] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    const closeNav = () => {
        setIsOpen(true);
    }

    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div>
            <header className={`header ${theme}`} id="header">
                <nav className={`nav container ${theme}`}>
                    <Link to="/" className="nav__logo">CodeLogo</Link>
                    <div className={`nav__menu ${isOpen ? 'show-menu' : ''}`} id="nav-menu" >
                        <ul className={`nav__list grid ${theme}`}>
                            <li className={`nav__item ${theme}`} onClick={() => setIsActive('home')}>
                                <a href="/"
                                    className='nav__link'
                                    style={(isActive === 'home') ? { color: 'var(--primary-color)' } : { color: 'var(--title-color)' }}
                                    onClick={closeNav}>
                                    <AiFillHome className='nav__icon'
                                    /> Home
                                </a>
                            </li>
                            <li className={`nav__item ${theme}`} onClick={() => setIsActive('about')}>
                                <a href="#about" className='nav__link'
                                    style={(isActive === 'about') ? { color: 'var(--primary-color)' } : { color: 'var(--title-color)' }}
                                    onClick={closeNav}>
                                    <FaUserAlt className='nav__icon' /> About
                                </a>
                            </li>
                            <li className={`nav__item ${theme}`} onClick={() => setIsActive('skills')}>
                                <a href="#skills" className='nav__link'
                                    style={(isActive === 'skills') ? { color: 'var(--primary-color)' } : { color: 'var(--title-color)' }}
                                    onClick={closeNav}>
                                    <AiFillFile className='nav__icon' /> Skills
                                </a>
                            </li>
                            <li className={`nav__item ${theme}`} onClick={() => setIsActive('services')}>
                                <a href="#services" className='nav__link'
                                    style={(isActive === 'services') ? { color: 'var(--primary-color)' } : { color: 'var(--title-color)' }}
                                    onClick={closeNav}>
                                    <BsBagCheckFill className='nav__icon' /> Services
                                </a>
                            </li>
                            <li className={`nav__item ${theme}`} onClick={() => setIsActive('portfolio')}>
                                <a href="#portfolio" className='nav__link'
                                    style={(isActive === 'portfolio') ? { color: 'var(--primary-color)' } : { color: 'var(--title-color)' }}
                                    onClick={closeNav}>
                                    <AiFillCode className='nav__icon' /> Portfolio
                                </a>
                            </li>
                            <li className={`nav__item ${theme}`} onClick={() => setIsActive('contact')}>
                                <a href="#contact" className='nav__link'
                                    style={(isActive === 'contact') ? { color: 'var(--primary-color)' } : { color: 'var(--title-color)' }}
                                    onClick={closeNav}>
                                    <AiFillMessage className='nav__icon' /> Contact
                                </a>
                            </li>
                        </ul>
                        <FaTimes className='nav__close' id='nav-close' onClick={toggleNav} />
                    </div>

                    <div className={`nav__theme-toggle ${theme}`} >
                        <div className="nav__btns">
                            {/* Theme Change Button */}
                            <CgDarkMode className='theme_button' onClick={handleThemeToggle} />
                            <div className="nav__toggle" id='nav-toggle' onClick={toggleNav}>
                                <AiTwotoneAppstore className='nav__icon' />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div >
    )
}

export default Navbar;