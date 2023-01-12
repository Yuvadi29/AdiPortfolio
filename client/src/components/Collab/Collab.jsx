import React from 'react';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import adi3 from '../../Docs/adi3.png';
import Testimonial from '../Testimonial/Testimonial';
import './Collab.css';

const Collab = () => {
    return (
        <div>
            <section className="collab section">
                <div className="collab_bg">
                    <div className=" container grid">
                        <div className="collab__data">
                            <h2 className="collab_title">Wanna Collab for a Project ?</h2>
                            <p className="collab_description">Contact me and let us get it done ASAP</p>
                            <a href="#contact" className="button btn--flex button--white contact_btn">Contact Me <IoArrowForwardCircleSharp className='project__icon button_icon' /></a>
                        </div>

                        <img src={adi3} alt="collab" className='collab__image'/>
                    </div>
                </div>
            </section>
            <Testimonial/>
        </div>
    )
}

export default Collab