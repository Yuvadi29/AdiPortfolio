import React from 'react';
import adityaLT from '../../Docs/adi2.JPG';
import { Link } from 'react-router-dom';
import { ImDownload2 } from 'react-icons/im';
import './About.css';
import Skills from '../Skills/Skills';

const About = () => {
    return (
        <div>
            <section className="about section" id="about">
                <h2 className="section_title">Get to Know Me</h2>
                <span className="section_subtitle">Introduction</span>
                <div className="about__container container grid">
                    <img src={adityaLT} alt="adityaLT" className='about__image' />
                    <div className="about__me">
                        <p className="about__description">
                            Web Developer, with extensive knowledge and years of experience of MERN STACK with experience, working in web technologies and Content Creation.
                        </p>

                        <div className="about__info">
                            <div>
                                <span className="about__info-title">2+</span>
                                <span className="about__info-name">Years <br /> Experience</span>
                            </div>
                            <div>
                                <span className="about__info-title">10+</span>
                                <div className="about__info-name">Projects <br /> Completed</div>
                            </div>
                            <div>
                                <span className="about__info-title">90+</span>
                                <div className="about__info-name">Videos <br /> Posted</div>
                            </div>
                        </div>

                        <div className="about__buttons">
                            <Link download="" to='../../Docs/Aditya-Resume.pdf' className="contact_btn btn--flex">Download Cv <ImDownload2 /></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Skills/>
        </div>
    )
}

export default About;