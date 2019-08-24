import React from 'react';
import { NavLink } from 'react-router-dom';

// SVGs
import { ReactComponent as Book } from '../../assets/SVGs/shop.svg';
import { ReactComponent as About } from '../../assets/SVGs/info-with-circle.svg';
import { ReactComponent as Projects } from '../../assets/SVGs/video.svg';
import { ReactComponent as Contact } from '../../assets/SVGs/phone.svg';

export default function Sidebar() {
    return (
        <div className="small-sidebar">
            <NavLink className="small-sidebar__button" to="book">
                    <Book className='small-sidebar__button-icon' />
                    <p>Book</p>
            </NavLink>


            <NavLink to="about" style={{textDecoration: 'none'}}>
                <div className="small-sidebar__button">
                    <About className='small-sidebar__button-icon' />
                    <p>About</p>
                </div>
            </NavLink>

            <NavLink to="projects" style={{textDecoration: 'none'}}>
                <div className="small-sidebar__button">
                    <Projects className='small-sidebar__button-icon' />
                    <p>Our Projects</p>
                </div>
            </NavLink>

            <NavLink to="contact" style={{textDecoration: 'none'}}>
                <div className="small-sidebar__button">
                    <Contact className='small-sidebar__button-icon' />
                    <p>Contact</p>
                </div>
            </NavLink>
        </div>
    )
}
