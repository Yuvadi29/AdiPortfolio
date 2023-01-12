import React, { useState } from 'react';
import { BsGrid1X2Fill, BsPatchCheckFill } from 'react-icons/bs';
import { MdReadMore } from 'react-icons/md';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { ImCross } from 'react-icons/im';
import './Services.css';
import Porfolio from '../Portfolio/Porfolio';

const Services = () => {

  const [modalOpen, setModalOpen] = useState(null);

  const openModal = (idx) => {
    setModalOpen(idx);
  };

  const closeModal = () => {
    setModalOpen(null);
  };

  return (
    <div>
      <section className="services section" id='services'>
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What i Offer</span>

        <div className="services__container container grid">
          {/* Service1 */}
          <div className="services__content">
            <div>
              <BsGrid1X2Fill className='services__icon' />
              <h3 className="services_title">Web <br /> Development</h3>
            </div>

            <span className="button btn--flex button--small button--link services__button contact_btn" onClick={() => openModal(0)}>
              View More <MdReadMore className='button__icon' />
            </span>

            {modalOpen === 0 && (
              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">FrontEnd <br /> Development</h4>
                  <ImCross className='services__modal-close' onClick={closeModal} />

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <BsPatchCheckFill className='services__modal-icon' />
                      <p>I Develop Website</p>
                    </li>
                    <li className="services__modal-service">
                      <BsPatchCheckFill className='services__modal-icon' />
                      <p>Web Page Development</p>
                    </li>
                    <li className="services__modal-service">
                      <BsPatchCheckFill className='services__modal-icon' />
                      <p>Using the Most Scalable Tech</p>
                    </li>
                    <li className="services__modal-service">
                      <BsPatchCheckFill className='services__modal-icon' />
                      <p>Easy to Use</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>


          {/* Service2 */}
          <div className="services__content">
            <div>
              <BsGrid1X2Fill className='services__icon' />
              <h3 className="services_title">Backend <br /> Development</h3>
            </div>

            <span className="button btn--flex button--small button--link services__button contact_btn " onClick={() => openModal(1)}>
              View More <MdReadMore className='button__icon' />
            </span>

            {modalOpen === 1 && (
              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">Backend <br /> Development</h4>
                  <ImCross className='services__modal-close' onClick={closeModal} />

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <BsPatchCheckFill className='services__modal-icon' />
                      <p>I Develop Backend</p>
                    </li>
                    <li className="services__modal-service">
                      <BsPatchCheckFill className='services__modal-icon' />
                      <p>API Creation</p>
                    </li>
                    <li className="services__modal-service">
                      <BsPatchCheckFill className='services__modal-icon' />
                      <p>Custom Rest API according to client</p>
                    </li>
                    <li className="services__modal-service">
                      <BsPatchCheckFill className='services__modal-icon' />
                      <p>Many Languages supported</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>


          {/* Service3 */}
          <div className="services__content">
            <div>
              <GoDeviceCameraVideo className='services__icon' />
              <h3 className="services_title">Content <br /> Creation</h3>
            </div>

            <span className="button btn--flex button--small button--link services__button contact_btn" onClick={() => openModal(2)}>
              View More <MdReadMore className='button__icon' />
            </span>

            {modalOpen === 2 && (
              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">Content <br /> Creation</h4>
                  <ImCross className='services__modal-close' onClick={closeModal} />

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <BsPatchCheckFill className='services__modal-icon' />
                      <p>I Create Content</p>
                    </li>
                    <li className="services__modal-service">
                      <BsPatchCheckFill className='services__modal-icon' />
                      <p>Develop Content for Social Media</p>
                    </li>
                    <li className="services__modal-service">
                      <BsPatchCheckFill className='services__modal-icon' />
                      <p>Recent Trends</p>
                    </li>
                    <li className="services__modal-service">
                      <BsPatchCheckFill className='services__modal-icon' />
                      <p>Various Domains</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>
      <Porfolio/>
    </div>
  )
}

export default Services