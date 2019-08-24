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
            <NavLink
                activeClassName="small-sidebar-active"
                className="small-sidebar__button"
                to="/" exact style={{textDecoration: 'none'}}
            >
                <Book className='small-sidebar__button-icon' />
                <p>Book</p>
            </NavLink>


            <NavLink
                activeClassName="small-sidebar-active"
                className="small-sidebar__button"
                to="/about" exact style={{textDecoration: 'none'}}
            >
                <About className='small-sidebar__button-icon' />
                <p>About</p>
            </NavLink>

            <NavLink
                activeClassName="small-sidebar-active"
                className="small-sidebar__button"
                to="/projects" exact style={{textDecoration: 'none'}}
            >
                <Projects className='small-sidebar__button-icon' />
                <p>Our Projects</p>
            </NavLink>

            <NavLink
                activeClassName="small-sidebar-active"
                className="small-sidebar__button"
                to="/contact" exact style={{textDecoration: 'none'}}
            >
                <Contact className='small-sidebar__button-icon' />
                <p>Contact</p>
            </NavLink>
        </div>
    )
}
