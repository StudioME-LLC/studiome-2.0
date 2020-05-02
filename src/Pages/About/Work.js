import React from 'react';

export default function Work() {
    return (
        <div className="about__work">
            <div className="about__work-banner" />
            <div className="about__work-banner-container">
                <h1 className="about__work-heading h1">Our Work</h1>
                <div className="about__work-border" />
            </div>

            <p className="about__work-heading-1 p-xl">In the 3 years since opening the studio, our team has produced and edited over 1,000 videos. Our work spans from animations, to promos, to e-learning videos, to commercials. And our expertise lies in our ability to produce these varying projects quickly and easily.</p>

            <iframe
                className="about__work-video about__work-video--1"
                src="https://player.vimeo.com/video/250807267"
                title="example-1" frameBorder="0"
                allow="autoplay; fullscreen" allowFullScreen>
            </iframe>
            <p
                className="about__work-description about__work-description--1 p-l"
            >Get a tour of AlphaLab, and learn what makes it a nationally ranked software accelerator.</p>
            <div className="about__work-border about__work-border--1" />

            <iframe
                className="about__work-video about__work-video--2"
                src="https://player.vimeo.com/video/225163302"
                title="example-1" frameBorder="0"
                allow="autoplay; fullscreen" allowFullScreen>
            </iframe>
            <p className="about__work-description about__work-description--2 p-l">Go behind the scenes on a shoot for Carnegie Science Center at StudioME.</p>
            <div className="about__work-border about__work-border--2" />

            <iframe
                className="about__work-video about__work-video--3"
                src="https://player.vimeo.com/video/228383734"
                title="example-1" frameBorder="0"
                allow="autoplay; fullscreen" allowFullScreen>
            </iframe>
            <p className="about__work-description about__work-description--3 p-l">David Alan creates custom clothing to fit your creative expression. Here, he uses StudioME to film interview-style promos for his business.</p>
            <div className="about__work-border about__work-border--3" />
            <a
                className="about__work-button-link"
                target="_blank"
                href="https://vimeo.com/showcase/5174503"
                rel="noopener noreferrer"
            >
                <button className="about__work-button">More Examples</button>
            </a>
        </div>
    )
}
