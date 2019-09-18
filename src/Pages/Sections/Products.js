import React from 'react'

export default function Products() {
    return (
        <div className="home__products">
            <h2 className="home__products-heading">Our Products and Services</h2>

            <button className="home__products-rentals-button">Rentals</button>
            <button className="home__products-services-button">Services</button>
            <button className="home__products-memberships-button">Memberships</button>

            <div className="home__products-container home__products-container--1">
                <div className="home__products-photo" />
                <div className="home__products-name">Self-Guided Studio</div>
                <button className="home__products-view">View</button>
            </div>

            <div className="home__products-container home__products-container--2">
                <div className="home__products-photo" />
                <div className="home__products-name">Mult-Purpose Studio</div>
                <button className="home__products-view">View</button>
            </div>

            <div className="home__products-container home__products-container--3">
                <div className="home__products-photo" />
                <div className="home__products-name">Podcast Lounge</div>
                <button className="home__products-view">View</button>
            </div>

            <div className="home__products-container home__products-container--4">
                <div className="home__products-photo" />
                <div className="home__products-name">Audio Studio</div>
                <button className="home__products-view">View</button>
            </div>

            <div className="home__products-container home__products-container--5">
                <div className="home__products-photo" />
                <div className="home__products-name">Equipment</div>
                <button className="home__products-view">View</button>
            </div>

            <div className="home__products-container home__products-container--6">
                <div className="home__products-photo" />
                <div className="home__products-name">Edit Stations</div>
                <button className="home__products-view">View</button>
            </div>
        </div>
    )
}
