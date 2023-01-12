import React from 'react';
import test2 from '../../Docs/testimonial2.jpg';
import test3 from '../../Docs/testimonial3.jpg';
import { FcRating } from 'react-icons/fc';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Testimonial.css';
import Contact from '../Contact/Contact';

const Testimonial = () => {
    return (
        <div>
            <section className="testimonial section">
                <h1 className="section_title">Testimonial</h1>
                <span className="section_subtitle">Reviews</span>

                <div className="testimonial__container container">
                    <div>
                        <Swiper
                            spaceBetween={60}
                            slidesPerView={1}
                        >
                            <SwiperSlide>
                                {/* First Testimonial */}
                                <div className="testimonial__content">
                                    <div className="testimonial__data">
                                        <div className="testimonial__header">
                                            <img src={test2} alt="testi1" className='testimonial__img' />

                                            <div>
                                                <h3 className="testimonial__name">Avinash Trivedi</h3>
                                                <span className="testimonial__client">Client</span>
                                            </div>
                                        </div>

                                        <div>
                                            <FcRating className='testimonial__rating' />
                                            <FcRating className='testimonial__rating' />
                                            <FcRating className='testimonial__rating' />
                                            <FcRating className='testimonial__rating' />
                                            <FcRating className='testimonial__rating' />
                                        </div>
                                    </div>

                                    <p className="testimonial__description">
                                        I got a good impression from working with Aditya and i got my project done with all the possible quality and attention with support 24 hrs a day.
                                    </p>
                                </div>
                            </SwiperSlide>

                            {/* Second Testimonial */}
                            <SwiperSlide>
                                <div className="testimonial__content">
                                    <div className="testimonial__data">
                                        <div className="testimonial__header">
                                            <img src={test2} alt="testi2" className='testimonial__img' />

                                            <div>
                                                <h3 className="testimonial__name">Yuvraj Trivedi</h3>
                                                <span className="testimonial__client">Client</span>
                                            </div>
                                        </div>

                                        <div>
                                            <FcRating className='testimonial__rating' />
                                            <FcRating className='testimonial__rating' />
                                            <FcRating className='testimonial__rating' />
                                            <FcRating className='testimonial__rating' />
                                            <FcRating className='testimonial__rating' />
                                        </div>
                                    </div>

                                    <p className="testimonial__description">
                                        I got a good impression from working with Aditya and i got my project done with all the possible quality and attention with support 24 hrs a day.
                                    </p>
                                </div>
                            </SwiperSlide>

                            {/* Third Testimonial */}
                            <SwiperSlide>
                                <div className="testimonial__content">
                                    <div className="testimonial__data">
                                        <div className="testimonial__header">
                                            <img src={test3} alt="testi2" className='testimonial__img' />

                                            <div>
                                                <h3 className="testimonial__name">Nikunj Trivedi</h3>
                                                <span className="testimonial__client">Client</span>
                                            </div>
                                        </div>

                                        <div>
                                            <FcRating className='testimonial__rating' />
                                            <FcRating className='testimonial__rating' />
                                            <FcRating className='testimonial__rating' />
                                            <FcRating className='testimonial__rating' />
                                            <FcRating className='testimonial__rating' />
                                        </div>
                                    </div>

                                    <p className="testimonial__description">
                                        I got a good impression from working with Aditya and i got my project done with all the possible quality and attention with support 24 hrs a day.
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <Contact/>
            </section>
        </div>
    )
}

export default Testimonial