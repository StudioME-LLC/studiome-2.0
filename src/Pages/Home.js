import React, { Component, createRef } from 'react';

// Sections
import Hero from './Home/Hero';
import Products from './Home/Products';
import Mission from './Home/Explain';
import Explain from './Home/Mission';


export default class Home extends Component {

    state = {
        myRefProducts: createRef()
    }

    onProductsHandler = () => {
        window.scroll({
            top: this.state.myRefProducts.current.offsetTop,
            behavior: 'smooth'
        });
    }

    componentDidMount() {
        if (this.props.sidebarSelection === 'products') {
            this.onProductsHandler();
        } else {
            return;
        }
    }

    componentDidUpdate() {
        if (this.props.sidebarSelection === 'products') {
            this.onProductsHandler();
        } else {
            return;
        }
    }

    render() {
        return (
            <div className="home">
            <Hero onProductsHandler={this.onProductsHandler} />
            <div style={{position: 'relative', top: '-75px'}} ref={this.state.myRefProducts} />
            <Products />
            <Mission />
            <Explain />
        </div>
        )
    }
}
