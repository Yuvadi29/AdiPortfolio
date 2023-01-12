import React from 'react';
import YtClone from '../../Docs/project1.png';
import Motivation from '../../Docs/Motivation.png';
import { GrPlayFill } from 'react-icons/gr';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Portfolio.css';
import Collab from '../Collab/Collab';

const Porfolio = () => {
    return (
        <div>
            <section className="portfolio section" id="portfolio">
                <h2 className="section_title">Portfolio</h2>
                <span className="section_subtitle">My Recent Work</span>

                <div className="portfolio__container container">
                    <div>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            // onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}
                        >

                            {/* Project1 */}
                            <SwiperSlide>
                                <div className="portfolio__content grid">
                                    <img src={YtClone} alt="portfolio" className='portfolio__img' />

                                    <div className="portfolio__data">
                                        <h3 className="portfolio_title">Youtube Clone</h3>
                                        <p className="portfolio_description">
                                            This is a Youtube Clone which i made using React. I used the Youtube v3 api provided by RAPIDAPI for this project. This project involved fetching the contents of the api including the videos, genres, content creator and their profile. Also the video is played using the react-player. It also shows the subscriber count of the creator as well.
                                        </p>
                                        <a href="https://adityaytclone.netlify.app/" target='_blank' className="button btn--flex button--small portfolio__button contact_btn" rel="noreferrer">Demo &nbsp;<GrPlayFill className='button__icon' /></a>
                                    </div>
                                </div>
                                <br />
                            </SwiperSlide>

                            {/* Project2 */}
                            <SwiperSlide>
                                <div className="portfolio__content grid">
                                    <img src={Motivation} alt="portfolio" className='portfolio__img' />

                                    <div className="portfolio__data">
                                        <h3 className="portfolio_title">Youtube Clone</h3>
                                        <p className="portfolio_description">
                                            This is a project which i made while learning the process of fetching api from an Api Provider and then displaying it on the screen to user. This app basically motivates you whenever you are low. Just click on the Generate button and it will generate a new Quote everytime so that you never feel demotivated.
                                        </p>
                                        <a href="https://motivateyourself.netlify.app/" target='_blank' className="button btn--flex button--small portfolio__button contact_btn" rel="noreferrer">Demo &nbsp;<GrPlayFill className='button__icon' /></a>
                                    </div>
                                </div>
                                <br />
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </section>
            <Collab/>
        </div>
    )
}

export default Porfolio;