import React from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import './ScrollTop.css';

const ScrollTop = () => {
    return (
        <div>
            <a href="#" className="scrollup" id="scroll-up">
                <BsArrowUpSquareFill className='scrollup__icon' />
            </a>
        </div>
    )
}

export default ScrollTop;