import React from 'react';

// Images
import MembershipsPhoto from '../../../assets/home/products/services/Membership-Banner.png';

export default function ProductMemberships() {
    return (
        <div className="home__products-memberships">
            <div className="home__products-memberships-image" style={{backgroundImage: `url(${MembershipsPhoto})`}} />
            <h2 className="home__products-memberships-heading">Memberships are coming soon!</h2>
                <div className="home__products-memberships-border" />
            <p className="home__products-memberships-paragraph">Help us decide how memberships should look by filling out the survey below.</p>
            <a
                className="home__products-memberships-survey-link"
                target="_blank"
                href="https://forms.gle/9Xor9rmRvPSFWhRA8"
                rel="noopener noreferrer"
            >
                <button className="home__products-memberships-survey">Take the survey!</button>
            </a>
        </div>
    )
}
