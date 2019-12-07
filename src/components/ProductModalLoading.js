import React from 'react';

// Components
import Spinner from '../components/Spinner';

// SVGs
import { ReactComponent as Close } from '../assets/home/products/cross.svg';

export default function ProductModalLoading(props) {
    return (
        <div>
            <div className={props.class}>
                <div className="product-modal__close-container">
                    <Close onClick={props.toggle} className="product-modal__close" />
                </div>
                <h2 className="product-modal__heading" >Loading...</h2>
                <div className="product-modal__border" />
                <div className="product-modal__loader"><Spinner /></div>
            </div>
        </div> 
    )
}
