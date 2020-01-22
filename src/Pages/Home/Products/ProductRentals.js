import React, { Component } from 'react';

// Apollo
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

// Product Items
import ProductItem from './ProductRentalItem';

// Queries
import {
    addImpression,
} from '../../../analytics/queries';

class ProductRentals extends Component {

    addImpression = (id) => {
		this.props.addImpression({
			variables: {
				date: new Date().toISOString().slice(0, 10),
				productId: id
			}
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <ProductItem
                    index={1}
                    name={"Self-Guided Studio"}
                    onModalToggle={this.props.onModalToggle.bind(this, 1)}
                    impression={this.addImpression.bind(this, '5e28a7e6a8e24c0004493f02')}
                />
    
                <ProductItem
                    index={2}
                    name={"Multi-Purpose Studio"}
                    onModalToggle={this.props.onModalToggle.bind(this, 2)}
                    impression={this.addImpression.bind(this, '5e28a7f9a8e24c0004493f03')}
                />
    
                <ProductItem
                    index={3}
                    name={"Podcast Lounge"}
                    onModalToggle={this.props.onModalToggle.bind(this, 3)}
                    impression={this.addImpression.bind(this, '5e28a808a8e24c0004493f04')}
                />
    
                <ProductItem
                    index={4}
                    name={"Audio Studio"}
                    onModalToggle={this.props.onModalToggle.bind(this, 4)}
                    impression={this.addImpression.bind(this, '5e28bdfea8e24c0004493f3b')}
                />
    
                <ProductItem
                    index={5}
                    name={"Equipment"}
                    onModalToggle={this.props.onModalToggle.bind(this, 5)}
                    impression={this.addImpression.bind(this, '5e28a85da8e24c0004493f05')}
                />
    
                <ProductItem
                    index={6}
                    name={"Edit Workstation"}
                    onModalToggle={this.props.onModalToggle.bind(this, 6)}
                    impression={this.addImpression.bind(this, '5e28a866a8e24c0004493f06')}
                />
    
                {/* <div className="home__products-rentals home__products-rentals--6">
                    <a className="home__products-photo-link" href="https://studiome.me/book-me/post-production/">
                        <div className="home__products-photo home__products-photo--6" />
                    </a>
                    <div className="home__products-name">Edit Stations</div>
                    <a href="https://studiome.me/book-me/post-production/">
                        <button className="home__products-view">View</button>
                    </a>
                </div> */}
            </React.Fragment>
        )
    }
}

export default compose(
	graphql(addImpression, { name: "addImpression" })
)(ProductRentals);