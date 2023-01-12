import React, { useRef } from 'react';
import { MdContacts, MdContactMail } from 'react-icons/md';
import { AiOutlineSend } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, form.current, process.env.EMAILJS_PUBLIC_KEY).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }


    return (
        <div>
            <section className="contact section" id="contact">
                <h2 className="section_title">Contact Me</h2>
                <span className="section_subtitle">Get In Touch</span>

                <div className="contact__container container grid">
                    <div>
                        <div className="contact__information">
                            <MdContacts className='contact__icon' />

                            <div>
                                <h3 className="contact_title">Call Me</h3>
                                <span className="contact_subtitle">+91-9764935361</span>
                            </div>
                        </div>
                        <div className="contact__information">
                            <MdContactMail className='contact__icon' />

                            <div>
                                <h3 className="contact_title">Mail At</h3>
                                <span className="contact_subtitle"><a href='mailto:letstalkaditya@gmail.com'
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit'
                                    }} target='_blank' rel="noreferrer">letstalkaditya@gmail.com</a></span>
                            </div>
                        </div>
                    </div>

                    <form ref={form} onSubmit={sendMail} className="contact__form grid
                    ">
                        <div className="contact__inputs grid">
                            <div className="contact__content">
                                <label className="contact__label">Name</label>
                                <input type="text" className="contact__input" name='username' />
                            </div>
                            <div className="contact__content">
                                <label className="contact__label">Email</label>
                                <input type="email" className="contact__input" name='usermail' />
                            </div>
                            <div className="contact__content">
                                <label className="contact__label">Message</label>
                                <textarea cols='0' rows='7' className="contact__input" name='usermessage' />
                            </div>

                            <div>
                                <button className="button btn--flex contact_btn submit_btn">Send Message &nbsp;<AiOutlineSend className='button__icon' /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact