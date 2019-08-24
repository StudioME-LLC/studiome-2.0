import React from 'react';
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

            {/*Book*/}
            <div className="large-sidebar__header">
                Book
            </div>
            <div className="large-sidebar__section">
                <RentalIcon className='large-sidebar__button-icon' />
                <p>Rental & DIY</p>
            </div>
            <div className="large-sidebar__section">
                <ServiceIcon className='large-sidebar__button-icon' />
                <p>Full Service</p>
            </div>
            <div className="large-sidebar__section">
                <MembershipsIcon className='large-sidebar__button-icon' />
                <p>Memberships</p>
            </div>
            <div className="large-sidebar__section">
                <CheckoutIcon className='large-sidebar__button-icon' />
                <p>Checkout</p>
            </div>

            {/*About*/}
            <div className="large-sidebar__header">
                About
            </div>
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
            <div className="large-sidebar__header">
                Our Projects
            </div>
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
            <div className="large-sidebar__header">
                Contact
            </div>
        </div>
    )
}
