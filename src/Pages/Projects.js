import React, { Component } from 'react';
import GIF from '../assets/projects/routine-maintenance.gif';


export default class Projects extends Component {

    componentDidMount() {
        window.scroll({
            top: 0,
        });
    }

    render() {
        return (
            <div>
                <h1 className="projects__heading">Cool projects coming soon!</h1>
                <img className="projects__gif" src={GIF} alt="test"/>
            </div>
        )
    }
}
