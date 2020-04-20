import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Community extends Component {
    render() {
        return (
            // Main Page
            <div className="community">
                <div className="community__banner" />
                <div className="community__banner-container">
                    <h1 className="community__heading">The Community</h1>
                    <div className="community__border" />
                </div>

                <p className="community__description">StudioME believes in easy and community-driven media creation. As part of our mission, we host local events, provide resources for new content creators, and celebrate the artists who create in our studio, as well as Pittsburgh at large.</p>

                <NavLink
                    to="/community/events" exact style={{textDecoration: 'none'}}
                    className="community__card community__card--1"
                >
                    <div className="community__card-banner">
                        <p>Event Hosting</p>
                        <div className="community__card-line" />
                    </div>
                </NavLink>
                <NavLink
                    to="/community/gallery" exact style={{textDecoration: 'none'}}
                    className="community__card community__card--2"
                >
                    <div className="community__card-banner">
                        <p>Gallery</p>
                        <div className="community__card-line" />
                    </div>
                </NavLink>
                <NavLink
                    to="/community/learn" exact style={{textDecoration: 'none'}}
                    className="community__card community__card--3"
                >
                    <div className="community__card-banner">
                        <p>Learn</p>
                        <div className="community__card-line" />
                    </div>
                </NavLink>
                <NavLink
                    to="/community/swag" exact style={{textDecoration: 'none'}}
                    className="community__card community__card--4"
                >
                    <div className="community__card-banner">
                        <p>Swag</p>
                        <div className="community__card-line" />
                    </div>
                </NavLink>
            </div>     
        )
    }
}
