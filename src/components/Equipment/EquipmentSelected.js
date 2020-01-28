import React from 'react';

// SVGs
import { ReactComponent as BackIcon} from '../../assets/home/products/circle-left.svg';

export default function EquipmentSelected(props) {
    return (
        <div className="equipment__container-2" >
                    <div className="equipment__selected-button" onClick={props.onBackButton} >
                        <BackIcon className="equipment__back-icon" />
                        <p className="equipment__back-text">Back</p>
                    </div>
                    {props.index > 0 
                        ? <button className="equipment__previous" onClick={props.onPreviousButton}>
                            &larr; {props.products[props.index - 1 ].title.slice(0,15)}...
                            </button> 
                        : null
                    }

                    {props.index + 1 !== props.products.length 
                        ? <button className="equipment__next" onClick={props.onNextButton}>
                            {props.products[props.index + 1 ].title.slice(0,15)}... &rarr;
                            </button> 
                        : null
                    }

                    <h1 className="equipment__selected-heading">{props.selectedProduct.title}</h1>
                    <div className="equipment__selected-photo" style={{backgroundImage: `url(${props.selectedProduct.photo})`}} alt="Selected-Photo" />
                    <div className="equipment__selected-description" dangerouslySetInnerHTML={{__html: props.selectedProduct.description}} />

                    <div className="equipment__prices-container">
                        <h3 className="equipment__prices-heading-1">In-Studio</h3>
                        <a target="_blank" rel="noopener noreferrer"
                            href={props.selectedProduct.rental_links[0].link}
                            className="equipment__prices equipment__prices--1"
                        >
                            <button className="equipment__button">{props.selectedProduct.rental_links[0].dayhour}</button>
                        </a>
                        <p className="equipment__prices-price equipment__prices-price--1">{props.selectedProduct.rental_links[0].cost}</p>

                        <a target="_blank" rel="noopener noreferrer"
                            href={props.selectedProduct.rental_links[1].link}
                            className="equipment__prices equipment__prices--2"
                        >
                            <button className="equipment__button">{props.selectedProduct.rental_links[1].dayhour}</button>
                        </a>
                        <p className="equipment__prices-price equipment__prices-price--2">{props.selectedProduct.rental_links[1].cost}</p>

                        <a target="_blank" rel="noopener noreferrer"
                            href={props.selectedProduct.rental_links[2].link}
                            className="equipment__prices equipment__prices--3"
                        >
                            <button className="equipment__button">{props.selectedProduct.rental_links[2].dayhour}</button>
                        </a>
                        <p className="equipment__prices-price equipment__prices-price--3">{props.selectedProduct.rental_links[2].cost}</p>

                        <h3 className="equipment__prices-heading-2">Off-Site</h3>
                        <a target="_blank" rel="noopener noreferrer"
                            href={props.selectedProduct.rental_links[3].link}
                            className="equipment__prices equipment__prices--4"
                        >
                            <button className="equipment__button">{props.selectedProduct.rental_links[3].dayhour}</button>
                        </a>
                        <p className="equipment__prices-price equipment__prices-price--4">{props.selectedProduct.rental_links[3].cost}</p>

                        <a target="_blank" rel="noopener noreferrer"
                            href={props.selectedProduct.rental_links[4].link}
                            className="equipment__prices equipment__prices--5"
                        >
                            <button className="equipment__button">{props.selectedProduct.rental_links[4].dayhour}</button>
                        </a>
                        <p className="equipment__prices-price equipment__prices-price--5">{props.selectedProduct.rental_links[4].cost}</p>

                        <a target="_blank" rel="noopener noreferrer"
                            href={props.selectedProduct.rental_links[5].link}
                            className="equipment__prices equipment__prices--6"
                        >
                            <button className="equipment__button">{props.selectedProduct.rental_links[5].dayhour}</button>
                        </a>
                        <p className="equipment__prices-price equipment__prices-price--6">{props.selectedProduct.rental_links[5].cost}</p>
                    </div>
                </div>
    )
}
