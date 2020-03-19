import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default class TempClosingModal extends Component {
    state = {
        modalToggle: false,
        modalClass: 'product-modal',
        backdropClass: 'main-backdrop main-backdrop__fadeIn',
    }

    componentDidMount() {
        setTimeout(function() {
            this.setState({modalToggle: true})
        }.bind(this), 4000)
      }

    onModalToggle = () => {
        this.setState({
            ...this.state,
            modalToggle: false,
            backdropClass: 'main-backdrop main-backdrop__fadeOut'
        })
    }

    onBookButton = () => {
        this.onModalToggle();
        this.props.onQuickButtonFix('rentals');
    }

    render() {
        return (
            <Fragment>
                {this.state.modalToggle && <div className={this.state.backdropClass} onClick={this.onModalToggle} /> }
                {this.state.modalToggle && <div className="temp-closing-modal">
                    <button className="temp-closing-modal__close-button" onClick={this.onModalToggle}>
                        <svg
                            className="temp-closing-modal__close"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        >
                            <title>close</title>
                            <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                        </svg>
                    </button>
                    <svg
                        className="temp-closing-modal__attention" 
                        version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                    >
                        <title>attention</title>
                        <path d="M16 3c-3.472 0-6.737 1.352-9.192 3.808s-3.808 5.72-3.808 9.192c0 3.472 1.352 6.737 3.808 9.192s5.72 3.808 9.192 3.808c3.472 0 6.737-1.352 9.192-3.808s3.808-5.72 3.808-9.192c0-3.472-1.352-6.737-3.808-9.192s-5.72-3.808-9.192-3.808zM16 0v0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16zM14 22h4v4h-4zM14 6h4v12h-4z"></path>
                    </svg>
                    <p className="temp-closing-modal__paragraph-1">Due to COVID-19, StudioME will <strong>not</strong> be accepting any walk-in bookings until April 1st.</p>
                    <p className="temp-closing-modal__paragraph-2">If you need to book something, however, we will temporarily open up on an <strong>appointment basis</strong>. Please book by site or by email to make an appointment.</p>
                    <NavLink
                        className="temp-closing-modal__button-link"
                        onClick={this.onBookButton}
                        to="/" exact
                    >
                        <button
                            className="temp-closing-modal__button"
                            
                            >Book an Appointment
                        </button>
                    </NavLink>
                </div> }
            </Fragment>
        )
    }
}
