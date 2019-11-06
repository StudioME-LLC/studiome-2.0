import React from 'react';

// SVGs
import { ReactComponent as Facebook } from '../../assets/about/contact/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/about/contact/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/about/contact/twitter.svg';
import { ReactComponent as YouTube } from '../../assets/about/contact/youtube.svg';
import { ReactComponent as Vimeo } from '../../assets/about/contact/vimeo.svg';

export default function Contact() {
    return (
        <div className="about__contact">
            <div className="about__contact-banner" />
            <div className="about__contact-banner-container">
                <h1 className="about__contact-heading">Contact</h1>
                <div className="about__contact-border" />
            </div>

            <div className="about__contact-icon-container">
                <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://www.facebook.com/studiomepgh/"
                    className="about__contact-icon-link">
                    <Facebook className="about__contact-icon about__contact-icon--1" />
                </a>

                <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://www.instagram.com/studiome_llc/"
                    className="about__contact-icon-link">
                    <Instagram className="about__contact-icon about__contact-icon--2" />
                </a>

                <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://twitter.com/StudioME_llc/"
                    className="about__contact-icon-link">
                    <Twitter className="about__contact-icon about__contact-icon--3" />
                </a>

                <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UC-qyGIloES4TL4CPxWBmrDA/"
                    className="about__contact-icon-link">
                    <YouTube className="about__contact-icon about__contact-icon--4" />
                </a>

                <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://vimeo.com/studiomellc/"
                    className="about__contact-icon-link">
                    <Vimeo className="about__contact-icon about__contact-icon--5" />
                </a>
            </div>
            

            <iframe
                title="contact-form"
                className="about__contact-form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdHptWG04E7RA0f9AKuFmbKDxEh2iW9YqzewO8TR2rM2dMjPA/viewform?embedded=true"
                frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            <iframe
                className="about__contact-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.577984058043!2d-79.9295610838317!3d40.46247657935969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f273cde9d741%3A0x425c4b6140239b61!2sStudioME!5e0!3m2!1sen!2sus!4v1549830213825"
                frameBorder="0"
                allowFullScreen
                title="map"
            >
            </iframe>

            <h2 className="about__contact-heading-1">Interested in an internship?</h2>
            <p className="about__contact-paragraph-1">
                <a
                    target="_blank" rel="noopener noreferrer"
                    className="about__contact-link-1"
                    href="https://studiome.me/video-production-internships/"
                >Video Production</a>
            </p>
            <p className="about__contact-paragraph-2">
                <a
                    target="_blank" rel="noopener noreferrer"
                    className="about__contact-link-1"
                    href="https://studiome.me/marketing-social-media-internships/"
                >Marketing / Social Media</a></p>
        </div>
    )
}
