import React, { Component } from 'react'

import { ReactComponent as ChevronArrow } from '../../assets/home/products/chevron-thin-down.svg';

export default class Products extends Component {

    state = {
        rentalsButtonClass: 'home__products-rentals-button',
        servicesButtonClass: 'home__products-services-button',
        membershipsButtonClass: 'home__products-memberships-button',
    }

    onActiveButton = (button) => {

        if (button === 'rentals') {
            this.setState({
                ...this.state,
                rentalsButtonClass: 'home__products-rentals-button--active',
                servicesButtonClass: 'home__products-services-button',
                membershipsButtonClass: 'home__products-memberships-button',
            })
        } else if (button === 'services') {
            this.setState({
                ...this.state,
                rentalsButtonClass: 'home__products-rentals-button',
                servicesButtonClass: 'home__products-services-button--active',
                membershipsButtonClass: 'home__products-memberships-button',
            })
        } else if (button === 'memberships') {
            this.setState({
                ...this.state,
                rentalsButtonClass: 'home__products-rentals-button',
                servicesButtonClass: 'home__products-services-button',
                membershipsButtonClass: 'home__products-memberships-button--active',
            })
        }
        
    }

    render() {
        return (
            <div className="home__products">
                <h2 className="home__products-heading">Our Products and Services</h2>
                <ChevronArrow className="home__products-arrow" />

                <button
                    className={this.state.rentalsButtonClass}
                    onClick={this.onActiveButton.bind(this, 'rentals')}
                >
                    Rentals
                </button>

                <button
                    className={this.state.servicesButtonClass}
                    onClick={this.onActiveButton.bind(this, 'services')}
                >
                    Services
                </button>

                <button
                    className={this.state.membershipsButtonClass}
                    onClick={this.onActiveButton.bind(this, 'memberships')}
                >
                    Memberships
                </button>

                <div className="home__products-container home__products-container--1">
                    <div className="home__products-photo home__products-photo--1" />
                    <div className="home__products-name">Self-Guided Studio</div>
                    <button className="home__products-view">View</button>
                </div>

                <div className="home__products-container home__products-container--2">
                    <div className="home__products-photo home__products-photo--2" />
                    <div className="home__products-name">Mult-Purpose Studio</div>
                    <button className="home__products-view">View</button>
                </div>

                <div className="home__products-container home__products-container--3">
                    <div className="home__products-photo home__products-photo--3" />
                    <div className="home__products-name">Podcast Lounge</div>
                    <button className="home__products-view">View</button>
                </div>

                <div className="home__products-container home__products-container--4">
                    <div className="home__products-photo home__products-photo--4" />
                    <div className="home__products-name">Audio Studio</div>
                    <button className="home__products-view">View</button>
                </div>

                <div className="home__products-container home__products-container--5">
                    <div className="home__products-photo home__products-photo--5" />
                    <div className="home__products-name">Equipment</div>
                    <button className="home__products-view">View</button>
                </div>

                <div className="home__products-container home__products-container--6">
                    <div className="home__products-photo home__products-photo--6" />
                    <div className="home__products-name">Edit Stations</div>
                    <button className="home__products-view">View</button>
                </div>
            </div>
        )
    }
}
