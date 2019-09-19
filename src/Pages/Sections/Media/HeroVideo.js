import React from 'react';

// Assets
import webVideo from '../../../assets/home/hero/web-hero.mp4';

export default function HeroVideo() {
    return (
        <div className="home__hero-video-container">
            <video src={webVideo} className="home__hero-video" autoPlay loop muted playsInline />
        </div>
    )
}
