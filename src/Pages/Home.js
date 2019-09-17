import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="home">

                <div className="home__web-hero">
                    <div className="home__hero-video" />
                    <div className="home__hero-messaging">
                        <h1 className="home__hero-heading">Media Made Easy</h1>
                        <h3 className="home__hero-subheading">A user-friendly space for media creation.</h3>
                    </div>
                </div>

                <div className="home__products">
                    <h2 className="home__products-heading">Our Products and Services</h2>

                    <button className="home__products-rentals-button">Rentals</button>
                    <button className="home__products-services-button">Services</button>
                    <button className="home__products-memberships-button">Memberships</button>

                    <div className="home__products-container home__products-container--1">
                        <div className="home__products-photo" />
                        <div className="home__products-name">Self-Guided Studio</div>
                        <button className="home__products-view">View</button>
                    </div>

                    <div className="home__products-container home__products-container--2">
                        <div className="home__products-photo" />
                        <div className="home__products-name">Mult-Purpose Studio</div>
                        <button className="home__products-view">View</button>
                    </div>

                    <div className="home__products-container home__products-container--3">
                        <div className="home__products-photo" />
                        <div className="home__products-name">Podcast Lounge</div>
                        <button className="home__products-view">View</button>
                    </div>

                    <div className="home__products-container home__products-container--4">
                        <div className="home__products-photo" />
                        <div className="home__products-name">Audio Studio</div>
                        <button className="home__products-view">View</button>
                    </div>

                    <div className="home__products-container home__products-container--5">
                        <div className="home__products-photo" />
                        <div className="home__products-name">Equipment</div>
                        <button className="home__products-view">View</button>
                    </div>

                    <div className="home__products-container home__products-container--6">
                        <div className="home__products-photo" />
                        <div className="home__products-name">Edit Stations</div>
                        <button className="home__products-view">View</button>
                    </div>
                </div>
                <div className="home__mission">
                    <div className="home__mission-banner" />
                    <div className="home__mission-banner-container">
                        <h1 className="home__mission-heading">Our Mission</h1>
                        <div className="home__mission-border" />
                        <h3 className="home__mission-subheading">The StudioME model was created with the challenge to deliver high quality
                        Content using brand new approaches to an outdated, over-priced model.</h3>
                    </div>

                    <p className="home__mission-offer">What we offer.</p>

                    <div className="home__mission-container home__mission-container--1">
                        <div className="home__mission-item">
                            <p className="home__mission-perk">High Speed Internet</p>
                        </div>
                    </div>
                    <div className="home__mission-container home__mission-container--2">
                        <div className="home__mission-item">
                            <p className="home__mission-perk">Retina Display Workstations</p>
                        </div>
                    </div>
                    <div className="home__mission-container home__mission-container--3">
                        <div className="home__mission-item">
                            <p className="home__mission-perk">Rentable Camera Gear</p>
                        </div>
                    </div>
                    <div className="home__mission-container home__mission-container--4">
                        <div className="home__mission-item">
                            <p className="home__mission-perk">Soundproof Recording Studios</p>
                        </div>
                    </div>

                    <div className="home__mission-container home__mission-container--5">
                        <div className="home__mission-item">
                            <p className="home__mission-perk">Coffee, Tea, & Water Stations</p>
                        </div>
                    </div>
                    <div className="home__mission-container home__mission-container--6">
                        <div className="home__mission-item">
                            <p className="home__mission-perk">Dressing Rooms</p>
                        </div>
                    </div>
                    <div className="home__mission-container home__mission-container--7">
                        <div className="home__mission-item">
                            <p className="home__mission-perk">Printing & Photocopying</p>
                        </div>
                    </div>
                    <div className="home__mission-container home__mission-container--8">
                        <div className="home__mission-item">
                            <p className="home__mission-perk">Professional Media Assistance</p>
                        </div>
                    </div>
                </div>
                <div className="home__explain">
                    <div className="home__explain-banner" />
                    <div className="home__explain-banner-container">
                        <h1 className="home__explain-heading">What we do</h1>
                        <div className="home__explain-border" />
                        <h3 className="home__explain-subheading">We make it as simple as possible to go from concept to creation.</h3>
                    </div>
                </div>
            </div>
        )
    }
}
