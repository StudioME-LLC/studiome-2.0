import React from 'react';

// Components
import Spinner from '../components/Spinner';

// SVGs
import { ReactComponent as Close } from '../assets/home/products/cross.svg';

export default function ProductModal(props) {

    let content = '';

    if (props.option3 === '') {
        content = (
            <div className={props.class}>
                <div className="product-modal__close-container">
                    <Close onClick={props.toggle} className="product-modal__close" />
                </div>
                <h2 className="product-modal__heading" >{props.heading}</h2>
                <div className="product-modal__border" />
                <p className="product-modal__subheading">{props.subheading}</p>
                <a
                    className="product-modal__alt-placement-1"
                    href={props.url1}
                    onClick={props.loadingToggle}
                >
                    <button className="product-modal__button">{props.option1}</button>
                </a>
                <a
                    className="product-modal__alt-placement-2"
                    href={props.url2}
                    onClick={props.loadingToggle}
                >
                    <button className="product-modal__button">{props.option2}</button>
                </a>
            </div>
        )
    } else if (props.option3 !== '') {
        content = (
            <div className={props.class}>
                <div className="product-modal__close-container">
                    <Close onClick={props.toggle} className="product-modal__close" />
                </div>
                <h2 className="product-modal__heading" >{props.heading}</h2>
                <div className="product-modal__border" />
                <p className="product-modal__subheading">{props.subheading}</p>
                <a
                    className="product-modal__placement-1"
                    href={props.url1}
                    onClick={props.loadingToggle}
                >
                    <button className="product-modal__button">{props.option1}</button>
                </a>
                <a
                    className="product-modal__placement-2"
                    href={props.url2}
                    onClick={props.loadingToggle}
                >
                    <button className="product-modal__button">{props.option2}</button>
                </a>
                <a
                    className="product-modal__placement-3"
                    href={props.url3}
                    onClick={props.loadingToggle}
                >
                    <button className="product-modal__button">{props.option3}</button>
                </a>
            </div>
        )
    }


    return (
        <div>
            {!props.loading ? content : (
                <div className={props.class}>
                    <div className="product-modal__close-container">
                        <Close onClick={props.toggle} className="product-modal__close" />
                    </div>
                    <h2 className="product-modal__heading" >Loading...</h2>
                    <div className="product-modal__border" />
                    <div className="product-modal__loader"><Spinner /></div>
                </div>
            )}
        </div> 
    )
}
