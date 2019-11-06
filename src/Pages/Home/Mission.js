import React from 'react';
import { NavLink } from 'react-router-dom';

// Photos
import Studio1 from '../../assets/home/explain/studios/Audio-Room-Main.jpg';
import Studio2 from '../../assets/home/explain/studios/podcast-main.jpg';
import Studio3 from '../../assets/home/explain/studios/MP-Studio-Main.jpg';
import Studio4 from '../../assets/home/explain/studios/Studio-E-Main.jpg';

import Equipment1 from '../../assets/home/explain/equipment/Equipment-1.jpg';
import Equipment2 from '../../assets/home/explain/equipment/Equipment-2.jpg';
import Equipment3 from '../../assets/home/explain/equipment/Equipment-3.jpg';
import Equipment4 from '../../assets/home/explain/equipment/Equipment-4.jpg';

import Workstation1 from '../../assets/home/explain/workstation/workstation-1.jpg';
import Workstation2 from '../../assets/home/explain/workstation/workstation-2.jpg';
import Workstation3 from '../../assets/home/explain/workstation/workstation-3.jpg';
import Workstation4 from '../../assets/home/explain/workstation/workstation-4.jpg';

export default function Explain(props) {
    return (
        <div className="home__mission">
            <div className="home__mission-banner" />
            <div className="home__mission-banner-container">
                <h1 className="home__mission-heading">Our Services</h1>
                <div className="home__mission-border" />
                {/* <h3 className="home__mission-subheading">The StudioME model was created with the challenge to deliver high quality
                content using brand new approaches to an outdated, over-priced model.</h3> */}
            </div>

            <h2 className="home__mission-heading-1">Studio Space</h2>
            <p className="home__mission-paragraph-1">Our studio spaces make it as easy as possible to produce video, photo, and audio content. They are designed for headshots, social media videos, kickstarter videos, podcasts, and more.</p>
            <div className="home__mission-container-1">
                <div className="home__mission-photo-1 home__mission-photo-1--1" style={{backgroundImage: `url(${Studio1})`}} />
                <div className="home__mission-photo-1 home__mission-photo-1--2" style={{backgroundImage: `url(${Studio2})`}} />
                <div className="home__mission-photo-1 home__mission-photo-1--3" style={{backgroundImage: `url(${Studio3})`}} />
                <div className="home__mission-photo-1 home__mission-photo-1--4" style={{backgroundImage: `url(${Studio4})`}} />
            </div>
            
            <div className="home__mission-heading-2">Equipment Rentals</div>
            <p className="home__mission-paragraph-2">We offer camera bodies, lenses, and other gear for all of your photography and videography needs.</p>
            <div className="home__mission-container-2">
                <div className="home__mission-photo-2 home__mission-photo-2--1" style={{backgroundImage: `url(${Equipment1})`}} />
                <div className="home__mission-photo-2 home__mission-photo-2--2" style={{backgroundImage: `url(${Equipment2})`}} />
                <div className="home__mission-photo-2 home__mission-photo-2--3" style={{backgroundImage: `url(${Equipment3})`}} />
                <div className="home__mission-photo-2 home__mission-photo-2--4" style={{backgroundImage: `url(${Equipment4})`}} />
            </div>
            <div className="home__mission-heading-3">Editing Workstations</div>
            <p className="home__mission-paragraph-3">Workstations are available for post-production and video FX. The stations include a powerful 27″ iMac, packed with the entire Adobe Cloud, Final Cut X, and iMovie. Stations also include free access to our professional music and sound effects libraries.</p>
            <div className="home__mission-container-3">
                <div className="home__mission-photo-3 home__mission-photo-3--1" style={{backgroundImage: `url(${Workstation4})`}} />
                <div className="home__mission-photo-3 home__mission-photo-3--2" style={{backgroundImage: `url(${Workstation1})`}} />
                <div className="home__mission-photo-3 home__mission-photo-3--3" style={{backgroundImage: `url(${Workstation2})`}} />
                <div className="home__mission-photo-3 home__mission-photo-3--4" style={{backgroundImage: `url(${Workstation3})`}} />
            </div>
            <NavLink
                    className="home__mission-book-link"
                    onClick={props.onQuickButtonFix.bind(this, 'rentals')}
                    to="/" exact
                >
                    <button
                        className="home__mission-book"
                        
                        >Book now!
                    </button>
                </NavLink>
        </div>
    )
}
