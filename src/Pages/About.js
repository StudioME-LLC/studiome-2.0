import React, { Component } from 'react';

// Sections
import Intro from './About/Intro';
import Team from './About/Team';
import Work from './About/Work';
import Contact from './About/Contact';

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Intro />
                <Team />
                <Work />
                <Contact />
            </React.Fragment>
        )
    }
}
