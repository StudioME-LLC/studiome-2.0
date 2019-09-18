import React from 'react';

// Assets
import webVideo from '../../assets/home/hero/web-hero.mp4';

export default function Hero() {
    return (
        <div className="home__web-hero">
            <div className="home__hero-video-container">
                <video src={webVideo} className="home__hero-video" autoPlay loop muted playsInline />
            </div>

            <div className="home__hero-circle" />
            
            <div className="home__hero-messaging">
                <h1 className="home__hero-heading">Media Made Easy</h1>
                <h3 className="home__hero-subheading">A user-friendly space for media creation.</h3>
            </div>
        </div>
    )
}
