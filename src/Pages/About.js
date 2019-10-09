import React, { Component } from 'react';

// Sections
import Intro from './About/Intro';
import Team from './About/Team';

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Intro />
                <Team />
                <div className="about__work">
                    <div className="about__work-banner" />
                    <div className="about__work-banner-container">
                        <h1 className="about__work-heading">Our Work</h1>
                        <div className="about__work-border" />
                    </div>

                    <h3 className="about__work-heading-1">In just 3 years since opening the studio, our team has produced and edited over 1,000 videos. Our work spans from animations, to promos, from e-learning videos, to commercials. And our expertise lies in our ability to produce these varying projects quickly and easily.</h3>

                    <iframe
                        className="about__work-video about__work-video--1"
                        src="https://player.vimeo.com/video/250807267"
                        title="example-1" frameBorder="0"
                        allow="autoplay; fullscreen" allowFullScreen>
                    </iframe>
                    <p className="about__work-description about__work-description--1">Description 1</p>
                    <div className="about__work-border about__work-border--1" />

                    <iframe
                        className="about__work-video about__work-video--2"
                        src="https://player.vimeo.com/video/225163302"
                        title="example-1" frameBorder="0"
                        allow="autoplay; fullscreen" allowFullScreen>
                    </iframe>
                    <p className="about__work-description about__work-description--2">Description 2</p>
                    <div className="about__work-border about__work-border--2" />
                </div>
            </React.Fragment>
        )
    }
}
