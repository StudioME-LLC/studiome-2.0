import React from 'react';

// Images
import StartToFinishPhoto from '../../../assets/home/products/services/StartToFinish.jpg';
import ProductionPhoto from '../../../assets/home/products/services/Production.jpg';
import EditingPhoto from '../../../assets/home/products/services/Post-Editing.jpg';

export default function ProductServices() {
    return (
        <React.Fragment>
            <div className="home__products-services home__products-services--1">
                <div className="home__products-services-image" style={{backgroundImage: `url(${StartToFinishPhoto})`}} />
                <h2 className="home__products-services-heading">Start to Finish</h2>
                <div className="home__products-services-border" />
                <p className="home__products-services-paragraph">We can help you at every step from script writing to launch. Let our team of experts take your project to the next level.</p>
                <h3 className="home__products-services-subheading">Capabilities:</h3>
                <ul className="home__products-services-list">
                    <li className="home__products-services-list-item">Creative Consultation</li>
                    <li className="home__products-services-list-item">Script Writing & Storyboarding</li>
                    <li className="home__products-services-list-item">Talent & Crew Search</li>
                    <li className="home__products-services-list-item">Project Management</li>
                    <li className="home__products-services-list-item">Production & Post Editing</li>
                    <li className="home__products-services-list-item">Formatting & Delivery</li>
                </ul>
                <button className="home__products-services-quote">Get a quote</button>
            </div>
            <div className="home__products-services home__products-services--2">
                <div className="home__products-services-image" style={{backgroundImage: `url(${ProductionPhoto})`}} />
                <h2 className="home__products-services-heading">Production</h2>
                <div className="home__products-services-border" />
                <p className="home__products-services-paragraph">New description...</p>
                <h3 className="home__products-services-subheading">Capabilities:</h3>
                <ul className="home__products-services-list">
                    <li className="products-services-list-item">Video Production</li>
                    <li className="products-services-list-item">Audio Recording</li>
                    <li className="products-services-list-item">Photography</li>
                    <li className="products-services-list-item">360 VR Recording</li>
                </ul>
                <button className="home__products-services-quote">Get a quote</button>
            </div>
            <div className="home__products-services home__products-services--3">
                <div className="home__products-services-image" style={{backgroundImage: `url(${EditingPhoto})`}} />
                <h2 className="home__products-services-heading">Post Editing</h2>
                <div className="home__products-services-border" />
                <p className="home__products-services-paragraph">Our editors can work to spice up your existing content, create new digital content, or a little of both.</p>
                <h3 className="home__products-services-subheading">Capabilities:</h3>
                <ul className="home__products-services-list">
                    <li className="products-services-list-item">Video Editing</li>
                    <li className="products-services-list-item">Photo Editing</li>
                    <li className="products-services-list-item">Audio Editing</li>
                    <li className="products-services-list-item">Motion Graphics</li>
                    <li className="products-services-list-item">Animations</li>
                    <li className="products-services-list-item">360 VR Editing</li>
                </ul>
                <button className="home__products-services-quote">Get a quote</button>
            </div>
        </React.Fragment>
    )
}
