import React from 'react';

// Images
import StartToFinishPhoto from '../../../assets/home/products/services/StartToFinish.jpg';
import ProductionPhoto from '../../../assets/home/products/services/Production.jpg';
import EditingPhoto from '../../../assets/home/products/services/Post-Editing.jpg';

export default function ProductServices(props) {
    return (
        <React.Fragment>
            <div className="products-services products-services--1 card">
                <a
                    target="_blank" href="https://forms.gle/ziysrwi8PtFhJbi57"
                    rel="noopener noreferrer"
                >
                    <div id="products-services__image" onClick={props.onServicesModalToggle} style={{backgroundImage: `url(${StartToFinishPhoto})`}} />
                </a>
                <h3 id="products-services__heading" className="h3 l">Start to Finish</h3>
                <div id="products-services__line" className="line-s line-s--orange" />
                <p id="products-services__paragraph" className="p-s">We can help you at every step from script writing to launch. Let our team of experts take your project to the next level.</p>
                <h5 id="products-services__subheading" className="h5">Capabilities:</h5>
                <ul id="products-services__list" className="p-xs">
                    <li>Creative Consultation</li>
                    <li>Script Writing & Storyboarding</li>
                    <li>Talent & Crew Search</li>
                    <li>Project Management</li>
                    <li>Production & Post Editing</li>
                    <li>Formatting & Delivery</li>
                </ul>
                <a
                    target="_blank"
                    href="https://forms.gle/ziysrwi8PtFhJbi57"
                    rel="noopener noreferrer"
                >
                    <button className="button button--l">Get a quote</button>
                </a>
            </div>

            <div className="products-services products-services--2 card">
                <a
                    target="_blank" href="https://forms.gle/ziysrwi8PtFhJbi57"
                    rel="noopener noreferrer"
                >
                    <div id="products-services__image" onClick={props.onServicesModalToggle} style={{backgroundImage: `url(${ProductionPhoto})`}} />
                </a>
                <h3 id="products-services__heading" className="h3 l">Production</h3>
                <div id="products-services__line" className="line-s line-s--orange" />
                <p id="products-services__paragraph" className="p-s">We use the same modern approach to streamline both small and large projects, whether in studio or on location.</p>
                <h5 id="products-services__subheading" className="h5">Capabilities:</h5>
                <ul id="products-services__list" className="p-xs">
                    <li>Video Production</li>
                    <li>Audio Recording</li>
                    <li>Photography</li>
                    <li>360 VR Recording</li>
                </ul>
                <a
                    target="_blank"
                    href="https://forms.gle/ziysrwi8PtFhJbi57"
                    rel="noopener noreferrer"
                >
                    <button
                        className="button button--l"
                        onClick={props.onServicesModalToggle}
                        >Get a quote
                    </button>
                </a>
            </div>

            <div className="products-services products-services--3 card">
                <a
                    target="_blank" href="https://forms.gle/ziysrwi8PtFhJbi57"
                    rel="noopener noreferrer"
                >
                    <div id="products-services__image"
                        onClick={props.onServicesModalToggle}
                        style={{backgroundImage: `url(${EditingPhoto})`}}
                    />
                </a>
                <h3 id="products-services__heading" className="h3 l">Post Editing</h3>
                <div id="products-services__line" className="line-s line-s--orange" />
                <p id="products-services__paragraph" className="p-s">Our editors can work to spice up your existing content, create new digital content, or a little of both.</p>
                <h5 id="products-services__subheading" className="h5">Capabilities:</h5>
                <ul id="products-services__list" className="p-xs">
                    <li>Video Editing</li>
                    <li>Photo Editing</li>
                    <li>Audio Editing</li>
                    <li>Motion Graphics</li>
                    <li>Animations</li>
                    <li>360 VR Editing</li>
                </ul>

                <a
                    target="_blank"
                    href="https://forms.gle/ziysrwi8PtFhJbi57"
                    rel="noopener noreferrer"
                >
                    <button
                        className="button button--l"
                        onClick={props.onServicesModalToggle}
                    >Get a quote
                    </button>
                </a>
            </div>
        </React.Fragment>
    )
}
