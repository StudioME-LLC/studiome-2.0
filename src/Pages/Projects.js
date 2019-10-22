import React from 'react';
import GIF from '../assets/projects/routine-maintenance.gif';

export default function Projects() {
    return (
        <div>
            <h1 className="projects__heading">Cool projects coming soon!</h1>
            <img className="projects__gif" src={GIF} alt="test"/>
        </div>
    )
}
