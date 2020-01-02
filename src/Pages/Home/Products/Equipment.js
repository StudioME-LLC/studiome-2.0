import React, { Component } from 'react'

export default class Equipment extends Component {

    state = {
        products: [],
        selected: false,
        selectedProduct: null,
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
            })
        })
    }

    onProductSelect = (index) => {
        this.setState({
            ...this.state,
            selected: !this.state.selected,
            selectedProduct: this.state.products[index],
        })

        window.scroll({
            top: 0,
        });
    }

    onBackButton = () => {
        this.setState({
            ...this.state,
            selected: !this.state.selected,
        })
    }
    
    render() {
        let content = this.state.products.map((product, index) => (
            <div className="equipment__component" onClick={this.onProductSelect.bind(this, index)} key={index}>
                <div className="equipment__component-photo" style={{backgroundImage: `url(${product.photo})`}} alt="Equipment-Photo" />
                <h1 className="equipment__component-heading">{product.title}</h1>
            </div>
        ));

        if (this.state.selected) {
            content = (
                <div className="equipment__container-2" >
                    <h1 className="equipment__selected-heading">{this.state.selectedProduct.title}</h1>
                    <div className="equipment__selected-photo" style={{backgroundImage: `url(${this.state.selectedProduct.photo})`}} alt="Selected-Photo" />
                    <div className="equipment__selected-description" dangerouslySetInnerHTML={{__html: this.state.selectedProduct.description}} />
                    <button className="equipment__selected-button" onClick={this.onBackButton}>Back</button>

                    <div className="equipment__prices-container">
                        <h3 className="equipment__prices-heading-1">In-Studio</h3>
                        <button className="equipment__prices-1">2 Hours</button>
                        <button className="equipment__prices-2">6 Hours</button>
                        <button className="equipment__prices-3">10 Hours</button>
                        <h3 className="equipment__prices-heading-2">Off-Site</h3>
                        <button className="equipment__prices-4">1 Day</button>
                        <button className="equipment__prices-5">3 Days</button>
                        <button className="equipment__prices-6">1 Week</button>
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
