import React from 'react';

// SVGs
import { ReactComponent as Close } from '../assets/home/products/cross.svg';

export default function ProductModal(props) {
    return (
        <div className={props.class}>
            <div className="product-modal__close-container">
                <Close onClick={props.toggle} className="product-modal__close" />
            </div>
            <h2 className="product-modal__heading" >Self-Guided Studio</h2>
            <div className="product-modal__border" />
            <p className="product-modal__subheading">Pick a duration for your booking:</p>
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
