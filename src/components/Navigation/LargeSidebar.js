import React from 'react';
import { NavLink } from 'react-router-dom';

// Large Sidebar SVGs
import { ReactComponent as RentalIcon } from '../../assets/SVGs/largeSidebar/camera.svg';
import { ReactComponent as ServiceIcon } from '../../assets/SVGs/largeSidebar/video-camera.svg';
import { ReactComponent as MembershipsIcon } from '../../assets/SVGs/largeSidebar/profile.svg';
import { ReactComponent as CheckoutIcon } from '../../assets/SVGs/largeSidebar/cart.svg';

import { ReactComponent as GeneralIcon } from '../../assets/SVGs/largeSidebar/info.svg';
import { ReactComponent as TeamIcon } from '../../assets/SVGs/largeSidebar/users.svg';
import { ReactComponent as WorkIcon } from '../../assets/SVGs/largeSidebar/film.svg';

import { ReactComponent as LearnIcon } from '../../assets/SVGs/largeSidebar/bookmark.svg';
import { ReactComponent as EventsIcon } from '../../assets/SVGs/largeSidebar/calendar.svg';
import { ReactComponent as PodcastIcon } from '../../assets/SVGs/largeSidebar/mic.svg';

export default function LargeSidebar() {
    return (
        <div className="large-sidebar">
            <div className="large-sidebar__container">

            {/*Book*/}
            <NavLink 
                activeClassName="large-sidebar-active"
                className="large-sidebar__header"
                to="/" exact style={{textDecoration: 'none'}}
            >
                <p>Book</p>
            </NavLink>
            <NavLink 
                activeClassName="large-sidebar-section-active"
                className="large-sidebar__section"
                to="/#rentals" exact style={{textDecoration: 'none'}}
            >
                <RentalIcon className='large-sidebar__button-icon' />
                <p>Rental & DIY</p>
            </NavLink>
            <NavLink 
                activeClassName="large-sidebar-section-active"
                className="large-sidebar__section"
                to="/#full-service" exact style={{textDecoration: 'none'}}
            >
                <ServiceIcon className='large-sidebar__button-icon' />
                <p>Full Service</p>
            </NavLink>
            <NavLink 
                activeClassName="large-sidebar-section-active"
                className="large-sidebar__section"
                to="/#memberships" exact style={{textDecoration: 'none'}}
            >
                <MembershipsIcon className='large-sidebar__button-icon' />
                <p>Memberships</p>
            </NavLink>
            <NavLink 
                activeClassName="large-sidebar-section-active"
                className="large-sidebar__section"
                to="/checkout" exact style={{textDecoration: 'none'}}
            >
                <CheckoutIcon className='large-sidebar__button-icon' />
                <p>Checkout</p>
            </NavLink>

            {/*About*/}
            <NavLink 
                activeClassName="large-sidebar-active"
                className="large-sidebar__header"
                to="/about" exact style={{textDecoration: 'none'}}
            >
                <p>About</p>
            </NavLink>
            <div className="large-sidebar__section">
                <GeneralIcon className='large-sidebar__button-icon' />
                <p>General</p>
            </div>
            <div className="large-sidebar__section">
                <TeamIcon className='large-sidebar__button-icon' />
                <p>Team</p>
            </div>
            <div className="large-sidebar__section">
                <WorkIcon className='large-sidebar__button-icon' />
                <p>Our Work</p>
            </div>

            {/*Our Projects*/}
            <NavLink 
                activeClassName="large-sidebar-active"
                className="large-sidebar__header"
                to="/projects" exact style={{textDecoration: 'none'}}
            >
                <p>Our Projects</p>
            </NavLink>
            <div className="large-sidebar__section">
                <LearnIcon className='large-sidebar__button-icon' />
                <p>Learn</p>
            </div>
            <div className="large-sidebar__section">
                <EventsIcon className='large-sidebar__button-icon' />
                <p>Studio Events</p>
            </div>
            <div className="large-sidebar__section">
                <PodcastIcon className='large-sidebar__button-icon' />
                <p>Our Podcast</p>
            </div>

            {/*Contact*/}
            <NavLink 
                activeClassName="large-sidebar-active"
                className="large-sidebar__header"
                to="/contact" exact style={{textDecoration: 'none'}}
            >
                <p>Contact</p>
            </NavLink>
            </div>
        </div>
    )
}
