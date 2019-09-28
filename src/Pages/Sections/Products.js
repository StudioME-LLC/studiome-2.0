import React, { Component } from 'react';

// Product Items
import ProductItem from './Products/ProductItem';

// Components
import StudioEModal from '../../components/ProductModal';
import Backdrop from '../../components/MainBackdrop';

export default class Products extends Component {

    state = {
        rentalsButtonClass: 'home__products-rentals-button--active',
        servicesButtonClass: 'home__products-services-button',
        membershipsButtonClass: 'home__products-memberships-button',

        modalToggle: false,
        modalClass: 'product-modal',
        backdropClass: 'main-backdrop',

        heading: '',
        subheading: '',
        option1: '',
        url1: '',
        option2: '',
        url2: '',
        option3: '',
        url3: '',
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

    onModalToggle = (product) => {
        if (!this.state.modalToggle) {
            this.setState({
                ...this.state,
                modalClass: "product-modal product-modal__popup",
                modalToggle: true,
                backdropClass: 'main-backdrop main-backdrop__fadeIn',
            })
        } else if (this.state.modalToggle) {
            this.setState({
                ...this.state,
                modalClass: "product-modal product-modal__popdown",
                modalToggle: false,
                backdropClass: 'main-backdrop main-backdrop__fadeOut',
            })
        }

        this.onProductToggle(product);
    }

    onProductToggle = (product) => {
        switch(product) {
            case 1:
                this.setState({
                    heading: "Self-Guided Studio",
                    subheading: "Pick a duration to view:",
                    option1: "2 Hours",
                    url1: "https://studiome.me/product/self-guided-studio-e-2-hour-package/",
                    option2: "6 Hours",
                    url2: "https://studiome.me/product/self-guided-studio-e-6-hour-package/",
                    option3: "10 Hours",
                    url3: "https://studiome.me/product/self-guided-studio-e-10-hour-package/",
                })
                break;

            case 2:
                this.setState({
                    heading: "Multi-Purpose Studio",
                    subheading: "Pick a duration to view:",
                    option1: "2 Hours",
                    url1: "https://studiome.me/product/multi-purpose-studio-2-hour-package/",
                    option2: "6 Hours",
                    url2: "https://studiome.me/product/multi-purpose-studio-6-hour-package/",
                    option3: "10 Hours",
                    url3: "https://studiome.me/product/multi-purpose-studio-10-hour-package/",
                })
                break;
            case 3:
                this.setState({
                    heading: "Podcast Lounge",
                    subheading: "Pick a duration to view:",
                    option1: "Hourly",
                    url1: "https://studiome.me/product/podcast-lounge-hourly/",
                    option2: "Daily",
                    url2: "https://studiome.me/product/podcast-lounge-full-day/",
                    option3: '',
                    url3: '',
                })
                break;
            case 4:
                this.setState({
                    heading: "Audio Studio",
                    subheading: "Pick a duration to view:",
                    option1: "Houry",
                    url1: "https://studiome.me/product/soundproof-audio-studio-hourly/",
                    option2: "Daily",
                    url2: "https://studiome.me/product/soundproof-audio-studio-full-day/",
                    option3: '',
                    url3: '',
                })
                break;
            case 5:
                this.setState({
                    heading: "Equipment",
                    subheading: "Pick a category to view:",
                    option1: "Camera",
                    url1: "https://studiome.me/book-me/camera-rental/",
                    option2: "Lighting",
                    url2: "https://studiome.me/book-me/lighting-rental/",
                    option3: 'Audio',
                    url3: 'https://studiome.me/book-me/audio-rental/',
                })
                break;
            case 6:
                this.setState({
                    heading: "Edit Stations",
                    subheading: "Pick a duration to view:",
                    option1: "Hourly",
                    url1: "https://studiome.me/book-me/camera-rental/",
                    option2: "Daily",
                    url2: "https://studiome.me/book-me/lighting-rental/",
                    option3: '',
                    url3: '',
                })
                break;
            default: return;
        }
    }

    render() {
        return (
            <div className="home__products">
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


                <StudioEModal
                    toggle={this.onModalToggle}
                    class={this.state.modalClass}

                    heading={this.state.heading}
                    subheading={this.state.subheading}

                    option1={this.state.option1}
                    url1={this.state.url1}
                    option2={this.state.option2}
                    url2={this.state.url2}
                    option3={this.state.option3}
                    url3={this.state.url3}
                />
                
                <div onClick={this.onModalToggle}>
                    <Backdrop class={this.state.backdropClass} />
                </div>

                <ProductItem
                    index={1}
                    name={"Self-Guided Studio"}
                    onModalToggle={this.onModalToggle.bind(this, 1)}
                />

                <ProductItem
                    index={2}
                    name={"Multi-Purpose Studio"}
                    onModalToggle={this.onModalToggle.bind(this, 2)}
                />

                <ProductItem
                    index={3}
                    name={"Podcast Lounge"}
                    onModalToggle={this.onModalToggle.bind(this, 3)}
                />

                <ProductItem
                    index={4}
                    name={"Audio Studio"}
                    onModalToggle={this.onModalToggle.bind(this, 4)}
                />

                <ProductItem
                    index={5}
                    name={"Equipment"}
                    onModalToggle={this.onModalToggle.bind(this, 5)}
                />

                <div className="home__products-container home__products-container--6">
                    <a className="home__products-photo-link" href="https://studiome.me/book-me/post-production/">
                        <div className="home__products-photo home__products-photo--6" />
                    </a>
                    <div className="home__products-name">Edit Stations</div>
                    <a href="https://studiome.me/book-me/post-production/">
                        <button className="home__products-view">View</button>
                    </a>
                </div>
            </div>
        )
    }
}
