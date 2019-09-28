import React, { Component } from 'react';

export default class ProductModal extends Component {

    

    render() {
        

        return (
            <div className={this.props.class}>
            <p className="product-modal__heading">Pick a duration for your booking:</p>
            <div className="product-modal__border" />
            <a className="product-modal__placement-1" href="https://studiome.me/product/self-guided-studio-e-2-hour-package/">
                <button className="product-modal__button">2 Hours</button>
            </a>
            <a className="product-modal__placement-2" href="https://studiome.me/product/self-guided-studio-e-6-hour-package/">
                <button className="product-modal__button">6 Hours</button>
            </a>
            <a className="product-modal__placement-3" href="https://studiome.me/product/self-guided-studio-e-10-hour-package/">
                <button className="product-modal__button">10 Hours</button>
            </a>
        </div>
        )
    }
}
