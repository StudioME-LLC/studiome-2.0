import React from 'react';

export default function ProductMemberships() {
    return (
        <div className="home__products-memberships">
            <div className="home__products-memberships-image" />
            <h2 className="home__products-memberships-heading">Memberships</h2>
            <div className="home__products-memberships-border" />
            
            <p className="home__products-get-started">Click <a
                className="home__products-get-started-link"
                href="https://studiome.me/get-started/"
                target="_blank"
                rel="noopener noreferrer"
                >here
            </a> to sign up for our free membership.</p>
            
            <p className="home__products-memberships-paragraph">Paid memberships are coming soon! Help us decide how memberships should look by filling out the survey below.</p>
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
