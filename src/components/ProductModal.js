import React from 'react';

// SVGs
import { ReactComponent as Close } from '../assets/home/products/cross.svg';

export default function ProductModal(props) {
    console.log(props.option3)
    return (
        <div>
            {props.option3 === '' ? (<div className={props.class}>
                <div className="product-modal__close-container">
                    <Close onClick={props.toggle} className="product-modal__close" />
                </div>
                <h2 className="product-modal__heading" >{props.heading}</h2>
                <div className="product-modal__border" />
                <p className="product-modal__subheading">{props.subheading}</p>
                <a
                    className="product-modal__alt-placement-1"
                    href={props.url1}
                >
                    <button className="product-modal__button">{props.option1}</button>
                </a>
                <a
                    className="product-modal__alt-placement-2"
                    href={props.url2}
                >
                    <button className="product-modal__button">{props.option2}</button>
                </a>
            </div>) : (<div className={props.class}>
                <div className="product-modal__close-container">
                    <Close onClick={props.toggle} className="product-modal__close" />
                </div>
                <h2 className="product-modal__heading" >{props.heading}</h2>
                <div className="product-modal__border" />
                <p className="product-modal__subheading">{props.subheading}</p>
                <a
                    className="product-modal__placement-1"
                    href={props.url1}
                >
                    <button className="product-modal__button">{props.option1}</button>
                </a>
                <a
                    className="product-modal__placement-2"
                    href={props.url2}
                >
                    <button className="product-modal__button">{props.option2}</button>
                </a>
                <a
                    className="product-modal__placement-3"
                    href={props.url3}
                >
                    <button className="product-modal__button">{props.option3}</button>
                </a>
            </div>)}
        </div> 
    )
}
