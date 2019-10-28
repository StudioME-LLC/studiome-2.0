import React from 'react';

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

export default function Explain() {
    return (
        <div className="home__explain">
            <div className="home__explain-banner" />
            <div className="home__explain-banner-container">
                <h1 className="home__explain-heading">Our Mission</h1>
                <div className="home__explain-border" />
                <h3 className="home__explain-subheading">The StudioME model was created with the challenge to deliver high quality
                content using brand new approaches to an outdated, over-priced model.</h3>
            </div>

            <h2 className="home__explain-heading-1">Studio Space</h2>
            <p className="home__explian-paragraph-1">Our studio rentals are designed to make photo, video, and audio as easy as possible to produce. They are perfect for headshots, kickstarter videos, podcast recording, and much more.</p>
            <div className="home__explain-container-1">
                <div className="home__explain-photo-1 home__explain-photo-1--1" style={{backgroundImage: `url(${Studio1})`}} />
                <div className="home__explain-photo-1 home__explain-photo-1--2" style={{backgroundImage: `url(${Studio2})`}} />
                <div className="home__explain-photo-1 home__explain-photo-1--3" style={{backgroundImage: `url(${Studio3})`}} />
                <div className="home__explain-photo-1 home__explain-photo-1--4" style={{backgroundImage: `url(${Studio4})`}} />
            </div>
            
            <div className="home__explain-heading-2">Equipment Rentals</div>
            <p className="home__explian-paragraph-2">StudioME offers camera bodies, lenses, and gear for photography and videography.This can be used for both in-studio or off-site rentals.</p>
            <div className="home__explain-container-2">
                <div className="home__explain-photo-2 home__explain-photo-2--1" style={{backgroundImage: `url(${Equipment1})`}} />
                <div className="home__explain-photo-2 home__explain-photo-2--2" style={{backgroundImage: `url(${Equipment2})`}} />
                <div className="home__explain-photo-2 home__explain-photo-2--3" style={{backgroundImage: `url(${Equipment3})`}} />
                <div className="home__explain-photo-2 home__explain-photo-2--4" style={{backgroundImage: `url(${Equipment4})`}} />
            </div>
            <div className="home__explain-heading-3">Editing Workstations</div>
            <p className="home__explian-paragraph-3">Workstations are available for post-production and video FX. The stations include a powerful 27″ iMac, packed with the entire Adobe Cloud, Final Cut X, and iMovie. Stations also include FREE access to our professional music and sound effects libraries.</p>
            <div className="home__explain-container-3">
                <div className="home__explain-photo-3 home__explain-photo-3--1" style={{backgroundImage: `url(${Workstation4})`}} />
                <div className="home__explain-photo-3 home__explain-photo-3--2" style={{backgroundImage: `url(${Workstation1})`}} />
                <div className="home__explain-photo-3 home__explain-photo-3--3" style={{backgroundImage: `url(${Workstation2})`}} />
                <div className="home__explain-photo-3 home__explain-photo-3--4" style={{backgroundImage: `url(${Workstation3})`}} />
            </div>
        </div>
    )
}
