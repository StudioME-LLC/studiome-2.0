import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from './redux/actions';

import './App.scss';
import "scroll-behavior-polyfill";

// Components
import Header from './Navigation/Header';
import LargeSidebar from './Navigation/LargeSidebar';
import SmallSidebar from './Navigation/SmallSidebar';
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
		if (selected === 'rentals') {
			this.props.rentalButton();
			this.setState({
				...this.state,
				sidebarSelection: 'products',
			})
		} else if (selected === 'services') {
			this.props.serviceButton();
			this.setState({
				...this.state,
				sidebarSelection: 'products',
			})
		} else if (selected === 'memberships') {
			this.props.membershipsButton();
			this.setState({
				...this.state,
				sidebarSelection: 'products',
			})
		} else if (selected === 'general') {
			this.setState({
				...this.state,
				sidebarSelection: 'general',
			})
		} else if (selected === 'team') {
			this.setState({
				...this.state,
				sidebarSelection: 'team',
			})
		} else if (selected === 'work') {
			this.setState({
				...this.state,
				sidebarSelection: 'work',
			})
		} else if (selected === 'contact') {
			this.setState({
				...this.state,
				sidebarSelection: 'contact',
			})
		}

		if (window.matchMedia('(max-width: 600px)').matches) {
			this.productsToggle()
		};
	}

	onQuickButtonFix = (selected) => {
		if (selected === 'rentals') {
			this.props.rentalButton();
			this.setState({
				...this.state,
				sidebarSelection: 'products',
			})
		}
	}

	onSmallSidebarSelection = (selected) => {
		this.setState({
			...this.state,
			largeSidebar: false,
		})

		if (selected === 'general') {
			this.setState({
				...this.state,
				sidebarSelection: 'general',
			})
		} else if (selected === 'contact') {
			this.setState({
				...this.state,
				sidebarSelection: 'contact',
			})
		}
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

	productsToggle = () => {
		this.setState({
			largeSidebar: !this.state.largeSidebar,
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

					<SmallSidebar
						onSmallSidebarSelection={this.onSmallSidebarSelection}
						onScrollHome={onScrollHome}
					/> 
					
					<LargeSidebar
						onScrollHome={onScrollHome}
						onLargeSidebarSelection={this.onLargeSidebarSelection}
						toggleLargeSidebar={this.toggleLargeSidebar}
						largeSidebarClass={this.state.largeSidebarClass}
					/>

					<div className="main">
						<div className={this.state.backdropClass} onClick={this.toggleLargeSidebar} />

						<Router
							onQuickButtonFix={this.onQuickButtonFix}
							onLargeSidebarSelection={this.onLargeSidebarSelection}
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