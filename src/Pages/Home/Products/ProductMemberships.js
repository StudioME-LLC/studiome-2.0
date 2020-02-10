import React from 'react';
import Package25 from '../../../assets/home/products/memberships/25membership-final.png'
import Package50 from '../../../assets/home/products/memberships/50membership-final.png'

export default function ProductMemberships() {
    return (
        <div className="home__products-memberships">
            <h2 className="home__products-memberships-heading">Memberships</h2>
            <div className="home__products-memberships-border" />

            <a
                target="_blank" rel="noopener noreferrer"
                className="home__products-membersip-container-1"
                href="https://studiome.me/product/25mo-25off-membership/"
            >
                <img
                    src={Package25}
                    alt="25% for $25 Membership"
                    className="home__products-memberships-package"
                />
            </a>

            <p className="home__products-memberships-package-description-1">25% off for $25 a month (3 months due on sign up)</p>

            <a
                target="_blank" rel="noopener noreferrer"
                className="home__products-membersip-container-2"
                href="https://studiome.me/product/50mo-50off-membership/"
            >
                    
                <img
                    src={Package50} alt="50% for $50 Membership"
                    className="home__products-memberships-package"
                />
            </a>

            <p className="home__products-memberships-package-description-2">50% off for $50 a month (3 months due on sign up)</p>


            


            <p className="home__products-get-started">Click <a
                className="home__products-get-started-link"
                href="https://studiome.me/get-started/"
                target="_blank"
                rel="noopener noreferrer"
                >here
            </a> to sign up for our free membership.</p>

            <p className="home__products-memberships-feedback">Want to give us feedback on our membership plans? <a
                href="https://forms.gle/9Xor9rmRvPSFWhRA8"
                rel="noopener noreferrer" target="_blank"
                className="home__products-feedback-link"
                >
                    Click Here
                </a>
            </p>
        </div>
    )
}
