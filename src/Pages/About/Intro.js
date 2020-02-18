import React from 'react';
import { NavLink } from 'react-router-dom';
import StudioRendering from '../../assets/about/intro/studiome_rendering.png'

export default function Intro(props) {
    return (
        <React.Fragment>
                <div className="about__intro-container">
                    <div className="about__intro-banner" />
                    <div className="about__intro-banner-container">
                        <h1 className="about__intro-heading">About Us</h1>
                        <div className="about__intro-border" />
                    </div>
                </div>

                <div className="about__intro-story-container">
                    <h2 className="about__intro-heading-1">How it all began:</h2>
                    <p className="about__intro-opener">StudioME opened its doors in 2016 by co-founders, Keith Parish and Joe Leachko.  Noticing a changing media landscape, they took on the challenge of redesigning the traditional studio to better serve the modern media creator. This new type of media creator demands quality, fast and affordable media production, whether a professional producer, marketing guru, entrepreneur, educational leader or just someone who wants to share their story on social media. The StudioME Model offers more efficient solutions in a user-friendly space to help take content to the next level in quality.</p>
                    <p className="about__intro-story-2">Keith Parish has been involved in video production since the age of 13 and has produced videos in over 40 states and 5 countries. Joe Leachko comes from an experiential marketing and architectural design background.</p>
                    <NavLink
                        className="about__intro-button-rentals-link"
                        onClick={props.onQuickButtonFix.bind(this, 'rentals')}
                        to="/" exact
                    >
                        <button
                            className="about__intro-button-rentals"
                            
                            >Rental Packages
                        </button>
                    </NavLink>
                    <a
                        className="about__intro-button-quote-link"
                        target="_blank"
                        href="https://forms.gle/ziysrwi8PtFhJbi57"
                        rel="noopener noreferrer"
                    >
                        <button className="about__intro-button-quote">Custom Quote</button>
                    </a>
                </div>

                <div className="about__intro-store-container">
                    <iframe 
						title="1"
						className="about__intro-store-video"
						src='https://player.vimeo.com/video/197530141'
						frameBorder="0" 
						webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen>
					</iframe>
                    <h3 className="about__intro-store-heading-1">Located in East Liberty:</h3>
                    <p className="about__intro-store-paragraph-1">5819 Penn Avenue</p>
                    <p className="about__intro-store-paragraph-2">Pittsburgh, PA 15206</p>
                    <h3 className="about__intro-store-heading-2">Operating Hours:</h3>
                    <p className="about__intro-store-paragraph-3">Monday - Saturday</p>
                    <p className="about__intro-store-paragraph-4">8am - 6pm</p>

                    <img src={StudioRendering} alt="Studio Rendering" className="about__intro-store-rendering" />
                    <a
                        className="about__intro-store-button-link"
                        target="_blank"
                        href="https://studiome.me/virtual-tour/"
                        rel="noopener noreferrer"
                    >
                        <button className="about__intro-store-button">Virtual Tour</button>
                    </a>
                </div>

                <div className="about__intro-perks-container">
                    <h2 className="about__intro-perks-heading-1">How We're Different</h2>
                    <ul className="about__intro-perks-list-1">
						<li><span style={{color: '#8DCDC1'}}>✓</span> Innovative, user-friendly space</li>
						<li><span style={{color: '#8DCDC1'}}>✓</span> From custom to assisted DIY production solutions</li>
						<li><span style={{color: '#8DCDC1'}}>✓</span> Customer-focused environment</li>
						<li><span style={{color: '#8DCDC1'}}>✓</span> Professional support staff</li>
						<li><span style={{color: '#8DCDC1'}}>✓</span> Ultra-efficient Self-guided Studio easily operated from an app</li>
						<li><span style={{color: '#8DCDC1'}}>✓</span> Specialized studios, reducing waste and saving budget</li>
						<li><span style={{color: '#8DCDC1'}}>✓</span> Access to media-related resources with free MEmbership</li>
					</ul>
                    <h2 className="about__intro-perks-heading-2">Perfect For</h2>
                    <ul className="about__intro-perks-list-2">
						<li><span style={{color: '#B6CE61'}}>•</span>  Content Creators</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Podcasters</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Educators / Training</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Entrepreneurs / Solopreneurs</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Kickstarters</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Social Media</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Vloggers / Youtubers</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Artist / Musicians</li>
						<li><span style={{color: '#B6CE61'}}>•</span>  Actors / Voice Talent</li>
					</ul>
                </div>
        </React.Fragment>
    )
}
