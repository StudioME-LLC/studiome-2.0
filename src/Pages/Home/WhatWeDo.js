import React from 'react';

import { ReactComponent as Icon1 } from '../../assets/home/what-we-do/connection.svg';
import { ReactComponent as Icon2 } from '../../assets/home/what-we-do/display.svg';
import { ReactComponent as Icon3 } from '../../assets/home/what-we-do/video-camera.svg';
import { ReactComponent as Icon4 } from '../../assets/home/what-we-do/volume-mute2.svg';
import { ReactComponent as Icon5 } from '../../assets/home/what-we-do/mug.svg';
import { ReactComponent as Icon6 } from '../../assets/home/what-we-do/man-woman.svg';
import { ReactComponent as Icon7 } from '../../assets/home/what-we-do/printer.svg';
import { ReactComponent as Icon8 } from '../../assets/home/what-we-do/video.svg';

export default function Mission() {
    return (
        <div className="home__what-we-do">
            <div className="home__what-we-do-banner" />
            <div className="home__what-we-do-banner-container">
                <h1 className="home__what-we-do-heading h1 white">What we do</h1>
                <div className="home__what-we-do-border" />
            </div>

            <p className="home__what-we-do-explanation p-xl l">From first-timers to professionals, StudioME offers user-friendly studio spaces, equipment rentals, editing workstations, and custom production services for all media creators. The StudioME model was created with the challenge to deliver high quality content using brand new approaches to an outdated, over-priced model. Keeping our promise of "Media Made Easy," we make it as simple as possible to go from concept to creation.</p>

            <div className="home__what-we-do-perks-border" />
            <h3 className="home__what-we-do-offer h3 l">What we offer.</h3>

            <div className="home__what-we-do-container home__what-we-do-container--1">
                <Icon1 className="home__what-we-do-icon--1" />
                <p className="home__what-we-do-text p-s">High Speed Internet / Live Internet Broadcast</p>
            </div>
            <div className="home__what-we-do-container home__what-we-do-container--2">
                <div className="home__what-we-do-item">
                    <Icon2 className="home__what-we-do-icon--1" />
                    <p className="home__what-we-do-text p-s">Retina Display Workstations</p>
                </div>
            </div>
            <div className="home__what-we-do-container home__what-we-do-container--3">
                <Icon3 className="home__what-we-do-icon--1" />
                <p className="home__what-we-do-text p-s">Rentable Camera Gear</p>
            </div>
            <div className="home__what-we-do-container home__what-we-do-container--4">
                <Icon4 className="home__what-we-do-icon--1" />
                <p className="home__what-we-do-text p-s">Quiet Studio Space</p>
            </div>

            <div className="home__what-we-do-container home__what-we-do-container--5">
                <Icon5 className="home__what-we-do-icon--2" />
                <p className="home__what-we-do-text p-s">Coffee, Tea, & Water Stations</p>
            </div>
            <div className="home__what-we-do-container home__what-we-do-container--6">
                <Icon6 className="home__what-we-do-icon--2" />
                <p className="home__what-we-do-text p-s">Dressing Rooms</p>
            </div>
            <div className="home__what-we-do-container home__what-we-do-container--7">
                <Icon7 className="home__what-we-do-icon--2" />
                <p className="home__what-we-do-text p-s">Printing & Photocopying</p>
            </div>
            <div className="home__what-we-do-container home__what-we-do-container--8">
                <Icon8 className="home__what-we-do-icon--2" />
                <p className="home__what-we-do-text p-s">Professional Media Assistance</p>
            </div>
        </div>
    )
}
