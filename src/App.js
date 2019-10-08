import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from './redux/actions';

import './App.scss';
import "scroll-behavior-polyfill";

// Components
import Header from './Navigation/Header';
import SmallSidebar from './Navigation/SmallSidebar';
import LargeSidebar from './Navigation/LargeSidebar';
import Router from './Navigation/Router';

// Handlers
import {
	onScrollHome
} from './handlers/RefHandlers';

class App extends React.Component {
	state = {
		largeSidebar: false,
		largeSidebarClass: 'large-sidebar',
		sidebarSelection: null,

		backdropClass: '',
	}

	onLargeSidebarSelection = (selected) => {
		console.log('Go to products')
		this.setState({
			...this.state,
			sidebarSelection: 'products',
		})

		if (selected === 'rentals') {
			this.props.rentalButton();
		} else if (selected === 'services') {
			this.props.serviceButton();
		} else if (selected === 'memberships') {
			this.props.membershipsButton();
		}

		if (window.matchMedia('(max-width: 600px)').matches) {
			this.toggleLargeSidebar()
		};
	}

	onSmallSidebarSelection = () => {
		this.setState({
			...this.state,
			largeSidebar: false,
		})
	}

	toggleLargeSidebar = () => {
		this.setState({
			largeSidebar: !this.state.largeSidebar,
			sidebarSelection: null,
		})

		if (!this.state.largeSidebar) {
			this.setState({
				largeSidebarClass: 'large-sidebar large-sidebar__active',
				backdropClass: 'backdrop backdrop__fadeIn',
			})
		} else {
			this.setState({
				largeSidebarClass: 'large-sidebar',
				backdropClass: 'backdrop backdrop__fadeOut',
			})
		}
	}

	render() {
		return (
			<BrowserRouter>
				<div className={
					!this.state.largeSidebar 
					? "small-sidebar-container" 
					: "large-sidebar-container"
				}>
					<Header
						toggleLargeSidebar={this.toggleLargeSidebar}
						onScrollHome={onScrollHome}
					/>

					<SmallSidebar onScrollHome={onScrollHome} /> 
					
					<LargeSidebar
						onScrollHome={onScrollHome}
						onLargeSidebarSelection={this.onLargeSidebarSelection}
						toggleLargeSidebar={this.toggleLargeSidebar}
						largeSidebarClass={this.state.largeSidebarClass}
					/>

					<div className="main">
						<div className={this.state.backdropClass} onClick={this.toggleLargeSidebar} />

						<Router
							sidebarSelection={this.state.sidebarSelection}
						/>
					</div>
					<div className="footer"></div>
				</div>
			</BrowserRouter>
		);
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

export default connect( mapStateToProps, mapDispatchToProps )(App);