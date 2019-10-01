import React from 'react';

import { ReactComponent as Icon1 } from '../../assets/home/mission/connection.svg';
import { ReactComponent as Icon2 } from '../../assets/home/mission/display.svg';
import { ReactComponent as Icon3 } from '../../assets/home/mission/video-camera.svg';
import { ReactComponent as Icon4 } from '../../assets/home/mission/volume-mute2.svg';
import { ReactComponent as Icon5 } from '../../assets/home/mission/mug.svg';
import { ReactComponent as Icon6 } from '../../assets/home/mission/man-woman.svg';
import { ReactComponent as Icon7 } from '../../assets/home/mission/printer.svg';
import { ReactComponent as Icon8 } from '../../assets/home/mission/video.svg';

export default function Mission() {
    return (
        <div className="home__mission">
            <div className="home__mission-banner" />
            <div className="home__mission-banner-container">
                <h1 className="home__mission-heading">What we do</h1>
                <div className="home__mission-border" />
                <h3 className="home__mission-subheading">We make it as simple as possible to go from concept to creation.</h3>
            </div>

            <p className="home__mission-explanation">StudioME is for media creators of all kinds, from first-timers to professionals.  We offer innovative, user-friendly studio space, equipment rental, editing workstations, and custom media production services.  We help our customers create great looking video, photo and audio content from concept to creation, keeping our promise of "Media Made Easy."</p>
            <p className="home__mission-offer">What we offer.</p>

            <div className="home__mission-container home__mission-container--1">
                <Icon1 className="home__mission-icon--1" />
                <p className="home__mission-text">High Speed Internet</p>
            </div>
            <div className="home__mission-container home__mission-container--2">
                <div className="home__mission-item">
                    <Icon2 className="home__mission-icon--1" />
                    <p className="home__mission-text">Retina Display Workstations</p>
                </div>
            </div>
            <div className="home__mission-container home__mission-container--3">
                <Icon3 className="home__mission-icon--1" />
                <p className="home__mission-text">Rentable Camera Gear</p>
            </div>
            <div className="home__mission-container home__mission-container--4">
                <Icon4 className="home__mission-icon--1" />
                <p className="home__mission-text">Soundproof Recording Studios</p>
            </div>

            <div className="home__mission-container home__mission-container--5">
                <Icon5 className="home__mission-icon--2" />
                <p className="home__mission-text">Coffee, Tea, & Water Stations</p>
            </div>
            <div className="home__mission-container home__mission-container--6">
                <Icon6 className="home__mission-icon--2" />
                <p className="home__mission-text">Dressing Rooms</p>
            </div>
            <div className="home__mission-container home__mission-container--7">
                <Icon7 className="home__mission-icon--2" />
                <p className="home__mission-text">Printing & Photocopying</p>
            </div>
            <div className="home__mission-container home__mission-container--8">
                <Icon8 className="home__mission-icon--2" />
                <p className="home__mission-text">Professional Media Assistance</p>
            </div>
        </div>
    )
}
