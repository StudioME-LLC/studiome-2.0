import React from 'react';

// Product Items
import ProductItem from './ProductRentalItem';

export default function ProductRentals(props) {
    return (
        <React.Fragment>
            <ProductItem
                index={1}
                name={"Self-Guided Studio"}
                onModalToggle={props.onModalToggle.bind(this, 1)}
            />

            <ProductItem
                index={2}
                name={"Multi-Purpose Studio"}
                onModalToggle={props.onModalToggle.bind(this, 2)}
            />

            <ProductItem
                index={3}
                name={"Podcast Lounge"}
                onModalToggle={props.onModalToggle.bind(this, 3)}
            />

            <ProductItem
                index={4}
                name={"Audio Studio"}
                onModalToggle={props.onModalToggle.bind(this, 4)}
            />

            <ProductItem
                index={5}
                name={"Equipment"}
                onModalToggle={props.onModalToggle.bind(this, 5)}
            />

            <div className="home__products-rentals home__products-rentals--6">
                <a className="home__products-photo-link" href="https://studiome.me/book-me/post-production/">
                    <div className="home__products-photo home__products-photo--6" />
                </a>
                <div className="home__products-name">Edit Stations</div>
                <a href="https://studiome.me/book-me/post-production/">
                    <button className="home__products-view">View</button>
                </a>
            </div>
        </React.Fragment>
    )
}
