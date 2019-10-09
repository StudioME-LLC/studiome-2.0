import React, { Component } from 'react';

// Sections
import Intro from './About/Intro';

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Intro />
                <div className="about__team-container">
                    <div className="about__team-banner" />
                    <div className="about__team-banner-container">
                        <h1 className="about__team-heading">Team</h1>
                        <div className="about__team-border" />
                    </div>

                    <div className="about__team-card-container about__team-card-container--1">
                        <div className="about__team-card about__team-card--front">
                            <div className="about__team-card-picture about__team-card-picture--1">
                                &nbsp;
                            </div>
                            <h4 className="about__team-card-name">
                                <span className="about__team-card-name-span about__team-card-name-span--1">Keith Parish</span>
                            </h4>
                        </div>
                        <div className="about__team-card about__team-card--back about__team-card--back--1">
                            <h1 className="about__team-card-role">Co-Founder</h1>
                            <p className="about__team-card-info-1">Keith’s passion for video has led him across the country and beyond, producing and directing projects ranging from television shows to documentaries.</p>
                            <p className="about__team-card-info-2">Keith graduated from the University of Pittsburgh with a degree in marketing and film studies. His background in marketing and experience in television allows him to understand not only the technical and visual aspects of production, but also the business purpose and message behind each production.</p>
                        </div>
                    </div>
                    <div className="about__team-card-container about__team-card-container--2">
                        <div className="about__team-card about__team-card--front">
                            <div className="about__team-card-picture about__team-card-picture--2">
                                &nbsp;
                            </div>
                            <h4 className="about__team-card-name">
                                <span className="about__team-card-name-span about__team-card-name-span--2">Joe Leachko</span>
                            </h4>
                        </div>
                        <div className="about__team-card about__team-card--back about__team-card--back--2">
                            <h1 className="about__team-card-role">Co-Founder</h1>
                            <p className="about__team-card-info-1">Keith’s passion for video has led him across the country and beyond, producing and directing projects ranging from television shows to documentaries.</p>
                            <p className="about__team-card-info-2">Keith graduated from the University of Pittsburgh with a degree in marketing and film studies. His background in marketing and experience in television allows him to understand not only the technical and visual aspects of production, but also the business purpose and message behind each production.</p>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}
