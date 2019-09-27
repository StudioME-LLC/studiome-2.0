import React from 'react';

export default function ProductModal() {
    return (
        <div className="product-modal">
            <p className="product-modal__heading">Pick a duration for you booking.</p>
            <a href="https://studiome.me/product/self-guided-studio-e-2-hour-package/">
                <button className="product-modal__button">2 Hours</button>
            </a>
            <a href="https://studiome.me/product/self-guided-studio-e-6-hour-package/">
                <button className="product-modal__button">6 Hours</button>
            </a>
            <a href="https://studiome.me/product/self-guided-studio-e-10-hour-package/">
                <button className="product-modal__button">10 Hours</button>
            </a>
        </div>
    )
}
