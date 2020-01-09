import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

// Components
import ProductsModal from '../../components/ProductModal';
import ProductRentals from './Products/ProductRentals';
import ProductServices from './Products/ProductServices';
import ProductMemberships from './Products/ProductMemberships';

class Products extends Component {

    state = {
        // Modal Functionality
        modalToggle: false,
        modalClass: 'product-modal',
        backdropClass: 'main-backdrop',

        // Modal Details
        heading: '',
        subheading: '',
        option1: '',
        url1: '',
        option2: '',
        url2: '',
        option3: '',
        url3: '',

        // Loading
        loading: false,
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            loading: false,
        })
    }

    onModalToggle = (product) => {
        if (!this.state.modalToggle) {
            this.setState({
                ...this.state,
                modalClass: "product-modal product-modal__popup",
                modalToggle: true,
                backdropClass: 'main-backdrop main-backdrop__fadeIn',
            })
        } else if (this.state.modalToggle) {
            this.setState({
                ...this.state,
                modalClass: "product-modal product-modal__popdown",
                modalToggle: false,
                backdropClass: 'main-backdrop main-backdrop__fadeOut',
            })
        }

        this.onProductToggle(product);
    }

    onProductToggle = (product) => {
        switch(product) {
            case 1:
                this.setState({
                    heading: "Self-Guided Studio",
                    subheading: "Pick a duration to view:",
                    option1: "2 Hours",
                    url1: "https://studiome.me/product/self-guided-studio-e-2-hour-package/",
                    option2: "6 Hours",
                    url2: "https://studiome.me/product/self-guided-studio-e-6-hour-package/",
                    option3: "10 Hours",
                    url3: "https://studiome.me/product/self-guided-studio-e-10-hour-package/",
                })
                break;

            case 2:
                this.setState({
                    heading: "Multi-Purpose Studio",
                    subheading: "Pick a duration to view:",
                    option1: "2 Hours",
                    url1: "https://studiome.me/product/multi-purpose-studio-2-hour-package/",
                    option2: "6 Hours",
                    url2: "https://studiome.me/product/multi-purpose-studio-6-hour-package/",
                    option3: "10 Hours",
                    url3: "https://studiome.me/product/multi-purpose-studio-10-hour-package/",
                })
                break;
            case 3:
                this.setState({
                    heading: "Podcast Lounge",
                    subheading: "Pick a duration to view:",
                    option1: "Hourly",
                    url1: "https://studiome.me/product/podcast-lounge-hourly/",
                    option2: "Daily",
                    url2: "https://studiome.me/product/podcast-lounge-full-day/",
                    option3: '',
                    url3: '',
                })
                break;
            case 4:
                this.setState({
                    heading: "Audio Studio",
                    subheading: "Pick a duration to view:",
                    option1: "Hourly",
                    url1: "https://studiome.me/product/soundproof-audio-studio-hourly/",
                    option2: "Daily",
                    url2: "https://studiome.me/product/soundproof-audio-studio-full-day/",
                    option3: '',
                    url3: '',
                })
                break;
            case 5:
                this.setState({
                    heading: "Equipment",
                    subheading: "Pick a category to view:",
                    option1: "Camera",
                    url1: "https://studiome.me/book-me/camera-rental/",
                    option2: "Lighting",
                    url2: "https://studiome.me/book-me/lighting-rental/",
                    option3: 'Audio',
                    url3: 'https://studiome.me/book-me/audio-rental/',
                })
                break;
            case 6:
                this.setState({
                    heading: "Edit Workstation",
                    subheading: "Pick a duration to view:",
                    option1: "Hourly",
                    url1: "https://studiome.me/product/editing-workstation-1-hour/",
                    option2: "Daily",
                    url2: "https://studiome.me/product/editing-workstation-full-day/",
                    option3: '',
                    url3: '',
                })
                break;
            default: return;
        }
    }

    onLoadingToggle = () => {
        this.setState({
            ...this.state,
            loading: true,
        })

        setTimeout(() => {
            this.setState({
                ...this.state,
                loading: false,
            })
        }, 3000);
    }

    render() {
        
        return (
            <div className="home__products">
                <button
                    className={this.props.rentalsButtonClass}
                    onClick={this.props.rentalButton}
                >
                    Rentals
                </button>

                <button
                    className={this.props.servicesButtonClass}
                    onClick={this.props.serviceButton}
                >
                    Services
                </button>

                <button
                    className={this.props.membershipsButtonClass}
                    onClick={this.props.membershipsButton}
                >
                    Memberships
                </button>


                <ProductsModal
                    toggle={this.onModalToggle}
                    class={this.state.modalClass}

                    heading={this.state.heading}
                    subheading={this.state.subheading}

                    option1={this.state.option1}
                    url1={this.state.url1}
                    option2={this.state.option2}
                    url2={this.state.url2}
                    option3={this.state.option3}
                    url3={this.state.url3}
                    loadingToggle={this.onLoadingToggle}
                    loading={this.state.loading}
                />
                
                <div className={this.state.backdropClass} onClick={this.onModalToggle} />

                {this.props.rentalToggle && <ProductRentals
                    onModalToggle={this.onModalToggle}
                />}

                {this.props.servicesToggle && <ProductServices />}

                {this.props.membershipsToggle && <ProductMemberships />}
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {
        rentalsButtonClass: state.rentalsButtonClass,
        servicesButtonClass: state.servicesButtonClass,
        membershipsButtonClass: state.membershipsButtonClass,
        rentalToggle: state.rentalToggle,
        servicesToggle: state.servicesToggle,
        membershipsToggle: state.membershipsToggle,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		rentalButton: () => dispatch(actions.rentalButton()),
		serviceButton: () => dispatch(actions.serviceButton()),
		membershipsButton: () => dispatch(actions.membershipsButton()),
	};
};

export default connect( mapStateToProps, mapDispatchToProps )(Products);