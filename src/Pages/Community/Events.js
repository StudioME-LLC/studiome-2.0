import React, { Component } from 'react'

export default class Events extends Component {
    componentDidMount() {
        window.scroll({
            top: 0,
        });
    }
    
    render() {
        return (
            <div className="events">
                <div className="events__banner" />
                <div className="events__banner-container">
                    <h1 className="events__heading">Hosted Events</h1>
                    <div className="events__border" />
                </div>

                <p className="events__description">StudioME believes in easy and community-driven media creation.
                    as part of our mission, we host film classes, professional speakers, and local events.
                </p>

                <h2 className="events__subheading">Upcoming Events</h2>
                <div className="events__subheading-line" />


                <a
                    href="https://www.eventbrite.com/e/teaching-me-with-dorin-williams-and-studiome-tickets-93586924009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="events__card"
                >
                    <div className="events__photo" />
                    <p className="events__date">Sat, March 14th, 1pm</p>
                    <h3 className="events__title">Teaching Me with Dorin Williams & StudioME</h3>
                </a>
            </div>
        )
    }
}
