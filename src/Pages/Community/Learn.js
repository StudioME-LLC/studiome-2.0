import React, { Component } from 'react';
import GIF from '../../assets/community/routine-maintenance.gif';


export default class Learn extends Component {

    componentDidMount() {
        window.scroll({
            top: 0,
        });
    }

    render() {
        return (
            <div>
                <h1 className="community__heading">Cool projects coming soon!</h1>
                <img className="community__gif" src={GIF} alt="test"/>
            </div>
        )
    }
}
