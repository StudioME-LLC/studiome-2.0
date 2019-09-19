import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

// Components
import Header from './Navigation/Header';
import SmallSidebar from './Navigation/SmallSidebar';
import LargeSidebar from './Navigation/LargeSidebar';
import Backdrop from './Navigation/Backdrop';
import Router from './Navigation/Router';

import "scroll-behavior-polyfill";

export default class App extends React.Component {
	state = {
		largeSidebar: false,
		largeSidebarClassToggle: false,
		largeSidebarClass: 'large-sidebar',
	}

	onScrollHome = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		});
	}

	toggleLargeSidebar = () => {
		this.setState({
			largeSidebar: !this.state.largeSidebar,
			largeSidebarClassToggle: !this.state.largeSidebarClass,
		})

		if (this.state.largeSidebarClass) {
			this.setState({
				largeSidebarClass: 'large-sidebar large-sidebar__active',
			})
		} else {
			this.setState({
				largeSidebarClass: 'large-sidebar',
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
						onScrollHome={this.onScrollHome}
					/>
					
					{!this.state.largeSidebar 
						? <SmallSidebar /> 
						: <LargeSidebar
							toggleLargeSidebar={this.toggleLargeSidebar}
							largeSidebarClass={this.state.largeSidebarClass}
						/>
					}

					<div className="main">
						{this.state.largeSidebar && <div onClick={this.toggleLargeSidebar} ><Backdrop /></div>}
						<Router />
					</div>
					<div className="footer"></div>
				</div>
			</BrowserRouter>
		);
	}
}
