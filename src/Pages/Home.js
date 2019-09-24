import React, { Component } from 'react';

// Sections
import Hero from './Sections/Hero';
import Products from './Sections/Products';
import Mission from './Sections/Mission';
import Explain from './Sections/Explain';



export default class Home extends Component {
    state = {
        myRefProducts: null,
    }

    onProductsHandler = () => {
        window.scroll({
			top: this.myRefProducts.offsetTop,
			behavior: 'smooth'
        });
        
        console.log('test')
    }

    render() {
        return (
            <div className="home">
                <Hero />
                <div style={{position: 'relative', top: '60px'}} ref={ (ref) => this.myRefProducts=ref }></div>
                <Products onProductsHandler={this.onProductsHandler} />
                <Mission />
                <Explain />
            </div>
        )
    }
}
