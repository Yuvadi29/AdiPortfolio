import React from 'react';
import { BsInstagram, BsYoutube, BsGithub } from 'react-icons/bs';
import ScrollTop from '../ScrollTop/ScrollTop';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer__bg">
                    <div className="footer__container container grid">
                        <div>
                            <h1 className="footer_title">Aditya Trivedi</h1>
                            <span className="footer_subtitle">Web Developer</span>
                        </div>

                        <ul className="footer__links">
                            <li>
                                <a href="#services" className='footer__link'>Services</a>
                            </li>
                            <li>
                                <a href="#portfolio" className='footer__link'>Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact" className='footer__link'>Contact</a>
                            </li>
                        </ul>

                        <div className="footer__socials">
                            <a href="https://instagram.com/_coding_adda" target='_blank' rel="noreferrer" className='footer__social'>
                                <BsInstagram />
                            </a>
                            <a href="https://youtube.com/@coding_adda" target='_blank' rel="noreferrer" className='footer__social'>
                                <BsYoutube />
                            </a>
                            <a href="https://github.com/Yuvadi29" target='_blank'
                                rel="noreferrer"
                                className='footer__social'>
                                <BsGithub />
                            </a>
                        </div>
                    </div>

                    <p className="footer__copy">&#169; Aditya Trivedi. All Rights Reserved</p>
                </div>
            </footer>
            <ScrollTop/>
        </div>
    )
}

export default Footer;