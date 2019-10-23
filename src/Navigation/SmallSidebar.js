import React from 'react';
import { NavLink } from 'react-router-dom';

// SVGs
import { ReactComponent as Book } from '../assets/navigation/SVGs/shop.svg';
import { ReactComponent as About } from '../assets/navigation/SVGs/info-with-circle.svg';
import { ReactComponent as Projects } from '../assets/navigation/SVGs/video.svg';
import { ReactComponent as Contact } from '../assets/navigation/SVGs/phone.svg';

export default function Sidebar(props) {
    return (
        <div className="small-sidebar">
            <NavLink
                onClick={props.onScrollHome}
                activeClassName="small-sidebar-active"
                className="small-sidebar__button"
                to="/" exact style={{textDecoration: 'none'}}
            >
                <Book className='small-sidebar__button-icon' />
                <p>Book</p>
            </NavLink>


            <NavLink
                onClick={props.onSmallSidebarSelection.bind(this, 'general')} 
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
                onClick={props.onSmallSidebarSelection.bind(this, 'contact')}
                activeClassName="small-sidebar-active"
                className="small-sidebar__button"
                to="/about/#contact" exact style={{textDecoration: 'none'}}
            >
                <Contact className='small-sidebar__button-icon' />
                <p>Contact</p>
            </NavLink>
        </div>
    )
}
