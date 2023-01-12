import React, { useState } from 'react';
import './Skills.css';
import { HiCode } from 'react-icons/hi';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { VscServerProcess } from 'react-icons/vsc';
import Services from '../Services/Services';

const Skills = () => {

  const [openSkillIdx, setOpenSkillIdx] = useState(0);

  const toggleSkills = (idx) => {
    setOpenSkillIdx(idx === openSkillIdx ? null : idx);
  };


  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">Technical Skills</span>

      <div className="skills__container container grid">
        <div>
          {/* Skill1 */}
          <div className={`skills__content ${openSkillIdx === 0 ? 'skills__open' : 'skills__close'}`}>
            <div className="skills__header">
              <HiCode className='skills__icon' />
              <div>
                <h1 className="skills__title">Frontend Development</h1>
                <span className="skills__subtitle">More than a year</span>
              </div>

              <AiOutlineArrowDown
                className={`skills__arrow ${openSkillIdx === 0 ? 'skills__arrow' : 'skills__arrow-close'}`}
                onClick={() => toggleSkills(0)} />
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__title">
                  <div className="skills__name">HTML</div>
                  <span className="skills__number">90%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__title">
                  <div className="skills__name">CSS</div>
                  <span className="skills__number">70%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__title">
                  <div className="skills__name">JavaScript</div>
                  <span className="skills__number">90%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage skills__javascript"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__title">
                  <div className="skills__name">React</div>
                  <span className="skills__number">50%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Skill2 */}
          <div className={`skills__content ${openSkillIdx === 1 ? 'skills__open' : 'skills__close'}`}>
            <div className="skills__header">
              <VscServerProcess className='skills__icon' />
              <div>
                <h1 className="skills__title">Backend Development</h1>
                <span className="skills__subtitle">More than a year</span>
              </div>

              <AiOutlineArrowDown className={`skills__arrow ${openSkillIdx === 1 ? 'skills__arrow-open' : 'skills__arrow-close'}`}
                onClick={() => toggleSkills(1)} />
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__title">
                  <div className="skills__name">PHP</div>
                  <span className="skills__number">60%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage skills__php"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__title">
                  <div className="skills__name">Node Js</div>
                  <span className="skills__number">50%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage skills__nodejs"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__title">
                  <div className="skills__name">Firebase</div>
                  <span className="skills__number">40%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage skills__firebase"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__title">
                  <div className="skills__name">Python</div>
                  <span className="skills__number">30%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage skills__python"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services/>
    </section>
  )
}

export default Skills;