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
            
            <p className="home__products-memberships-paragraph">For paid memberships, we offer two simple plans:</p>

            <div className="home__products-memberships-package home__products-memberships-packag--1">
                <p className="home__products-memberships-package-name">$25mo / 25%off</p>
            </div>

            <p className="home__products-memberships-feedback">Want to give us feedback on our membership plans? <a
                href="https://forms.gle/9Xor9rmRvPSFWhRA8"
                rel="noopener noreferrer" target="_blank">
                    Click Here
                </a>
            </p>
        </div>
    )
}
