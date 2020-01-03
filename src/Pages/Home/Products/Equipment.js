import React, { Component } from 'react';

// SVGs
import { ReactComponent as BackIcon} from '../../../assets/home/products/circle-left.svg';

// Components
import Spinner from '../../../components/Spinner';

export default class Equipment extends Component {

    state = {
        products: [],
        selected: false,
        selectedProduct: null,
        isLoading: true,
    }

	componentDidMount() {
		return fetch('https://studiome.me/wp-json/wp/v2/pages/907')
		.then(response => response.json())
		.then(responseJson => {
            let productsArray = responseJson.acf.product_blocks;
            let products = [];

            for (let i = 0; i < productsArray.length; i++) {
                products.push(productsArray[i])
            }

            this.setState({
                ...this.state,
                products: products,
                isLoading: false,
            })
        })
    }

    onProductSelect = (index) => {
        this.setState({
            ...this.state,
            selected: !this.state.selected,
            index: index,
            selectedProduct: this.state.products[index],
        })

        window.scroll({
            top: 0,
        });
    }

    onPreviousButton = () => {
        this.setState({
            ...this.state,
            selectedProduct: this.state.products[this.state.index - 1],
            index: this.state.index - 1,
        })
    }

    onNextButton = () => {
        this.setState({
            ...this.state,
            selectedProduct: this.state.products[this.state.index +1 ],
            index: this.state.index + 1,
        })
    }

    onBackButton = () => {
        this.setState({
            ...this.state,
            selected: !this.state.selected,
        })

        window.scroll({
            top: 0,
        });
    }
    
    render() {
        let content = <div style={{gridColumn: '2 / 4'}}><Spinner /></div>
        
        if (!this.state.isLoading) {
            content = this.state.products.map((product, index) => (
            <div className="equipment__component" onClick={this.onProductSelect.bind(this, index)} key={index}>
                <div className="equipment__component-photo" style={{backgroundImage: `url(${product.photo})`}} alt="Equipment-Photo" />
                <h1 className="equipment__component-heading">{product.title}</h1>
            </div>
        ))}

        if (this.state.selected) {
            content = (
                <div className="equipment__container-2" >
                    <div className="equipment__selected-button" onClick={this.onBackButton} >
                        <BackIcon className="equipment__back-icon" />
                        <p className="equipment__back-text">Back</p>
                    </div>

                    <h1 className="equipment__selected-heading">{this.state.selectedProduct.title}</h1>
                    <div className="equipment__selected-photo" style={{backgroundImage: `url(${this.state.selectedProduct.photo})`}} alt="Selected-Photo" />
                    <div className="equipment__selected-description" dangerouslySetInnerHTML={{__html: this.state.selectedProduct.description}} />

                    <div className="equipment__prices-container">
                        {this.state.index > 0 ? <button className="equipment__previous" onClick={this.onPreviousButton}>&larr; {this.state.products[this.state.index - 1 ].title.slice(0,15)}...</button> : null}
                        {this.state.index + 1 !== this.state.products.length ? <button className="equipment__next" onClick={this.onNextButton}>{this.state.products[this.state.index + 1 ].title.slice(0,15)}... &rarr;</button> : null}
                        <h3 className="equipment__prices-heading-1">In-Studio</h3>
                        <a target="_blank" rel="noopener noreferrer"
                            href={this.state.selectedProduct.rental_links[0].link}
                            className="equipment__prices-1"
                        >
                            <button className="equipment__button">{this.state.selectedProduct.rental_links[0].dayhour}</button>
                        </a>
                        <p className="equipment__prices-price-1">{this.state.selectedProduct.rental_links[0].cost}</p>

                        <a target="_blank" rel="noopener noreferrer"
                            href={this.state.selectedProduct.rental_links[1].link}
                            className="equipment__prices-2"
                        >
                            <button className="equipment__button">{this.state.selectedProduct.rental_links[1].dayhour}</button>
                        </a>
                        <p className="equipment__prices-price-2">{this.state.selectedProduct.rental_links[1].cost}</p>

                        <a target="_blank" rel="noopener noreferrer"
                            href={this.state.selectedProduct.rental_links[2].link}
                            className="equipment__prices-3"
                        >
                            <button className="equipment__button">{this.state.selectedProduct.rental_links[2].dayhour}</button>
                        </a>
                        <p className="equipment__prices-price-3">{this.state.selectedProduct.rental_links[2].cost}</p>

                        <h3 className="equipment__prices-heading-2">Off-Site</h3>
                        <a target="_blank" rel="noopener noreferrer"
                            href={this.state.selectedProduct.rental_links[3].link}
                            className="equipment__prices-4"
                        >
                            <button className="equipment__button">{this.state.selectedProduct.rental_links[3].dayhour}</button>
                        </a>
                        <p className="equipment__prices-price-4">{this.state.selectedProduct.rental_links[3].cost}</p>

                        <a target="_blank" rel="noopener noreferrer"
                            href={this.state.selectedProduct.rental_links[4].link}
                            className="equipment__prices-5"
                        >
                            <button className="equipment__button">{this.state.selectedProduct.rental_links[4].dayhour}</button>
                        </a>
                        <p className="equipment__prices-price-5">{this.state.selectedProduct.rental_links[4].cost}</p>

                        <a target="_blank" rel="noopener noreferrer"
                            href={this.state.selectedProduct.rental_links[5].link}
                            className="equipment__prices-6"
                        >
                            <button className="equipment__button">{this.state.selectedProduct.rental_links[5].dayhour}</button>
                        </a>
                        <p className="equipment__prices-price-6">{this.state.selectedProduct.rental_links[5].cost}</p>
                    </div>
                </div>
            )
        }

        return (
            <div className="equipment">
                <div className="equipment__banner" />
                <div className="equipment__banner-container">
                    <h1 className="equipment__heading">Equipment</h1>
                    <div className="equipment__border" />
                </div>

                <div className="equipment__container">
                    {content}
                </div>
            </div>
        )
    }
}
