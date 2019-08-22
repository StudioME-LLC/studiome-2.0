import React from 'react';

// SVGs
import { ReactComponent as Book } from '../../assets/SVGs/shop.svg';
import { ReactComponent as About } from '../../assets/SVGs/info-with-circle.svg';
import { ReactComponent as Projects } from '../../assets/SVGs/video.svg';
import { ReactComponent as Contact } from '../../assets/SVGs/phone.svg';

export default function Sidebar() {
    return (
        <div className="small-sidebar">
            <div className="small-sidebar__button">
                <Book className='small-sidebar__button-icon' />
                <p>Book</p>
            </div>
            <div className="small-sidebar__button">
                <About className='small-sidebar__button-icon' />
                <p>About</p></div>
            <div className="small-sidebar__button">
                <Projects className='small-sidebar__button-icon' />
                <p>Our Projects</p>
            </div>
            <div className="small-sidebar__button">
                <Contact className='small-sidebar__button-icon' />
                <p>Contact</p>
            </div>
        </div>
    )
}
