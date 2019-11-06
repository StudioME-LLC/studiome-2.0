import React, { Component, createRef } from 'react';

// Sections
import Intro from './About/Intro';
import Team from './About/Team';
import Work from './About/Work';
import Contact from './About/Contact';

export default class About extends Component {
    state = {
        myRefTeam: createRef(),
        myRefWork: createRef(),
        myRefContact: createRef(),
    }

    componentDidMount() {
        if (this.props.sidebarSelection === 'general') {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            })
        } else if (this.props.sidebarSelection === 'team') {
            this.onTeamHandler();
        } else if (this.props.sidebarSelection === 'work') {
            this.onWorkHandler();
        } else if (this.props.sidebarSelection === 'contact') {
            this.onContactHandler();
        } else {
            return;
        }
    }

    componentDidUpdate() {
        if (this.props.sidebarSelection === 'general') {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            })
        } else if (this.props.sidebarSelection === 'team') {
            this.onTeamHandler();
        } else if (this.props.sidebarSelection === 'work') {
            this.onWorkHandler();
        } else if (this.props.sidebarSelection === 'contact') {
            this.onContactHandler();
        } else {
            return;
        }
    }

    onTeamHandler = () => {
        window.scroll({
            top: this.state.myRefTeam.current.offsetTop,
            behavior: 'smooth'
        });
    }

    onWorkHandler = () => {
        window.scroll({
            top: this.state.myRefWork.current.offsetTop,
            behavior: 'smooth'
        });
    }

    onContactHandler = () => {
        window.scroll({
            top: this.state.myRefContact.current.offsetTop
        });
    }

    render() {
        return (
            <React.Fragment>
                <Intro
                    onQuickButtonFix={this.props.onQuickButtonFix}
                    onLargeSidebarSelection={this.props.onLargeSidebarSelection}
                />
                <div style={{position: 'relative', top: '-75px'}} ref={this.state.myRefTeam} />
                <Team />
                <div style={{position: 'relative', top: '-75px'}} ref={this.state.myRefWork} />
                <Work />
                <div style={{position: 'relative', top: '-75px'}} ref={this.state.myRefContact} />
                <Contact />
            </React.Fragment>
        )
    }
}
