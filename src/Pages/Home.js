import React, { Component } from 'react';

// Sections
import Hero from './Sections/Hero';
import Products from './Sections/Products';
import Mission from './Sections/Mission';
import Explain from './Sections/Explain';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Hero />
                <Products />
                <Mission />
                <Explain />
            </div>
        )
    }
}
