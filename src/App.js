import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

// Components
import Header from './components/Navigation/Header';
import SmallSidebar from './components/Navigation/SmallSidebar';
import LargeSidebar from './components/Navigation/LargeSidebar';
import Backdrop from './components/Navigation/Backdrop';
import Router from './components/Navigation/Router';

export default class App extends React.Component {
	state = {
		largeSidebar: false,
	}

	toggleLargeSidebar = () => {
		this.setState({ largeSidebar: !this.state.largeSidebar })
		console.log('test')
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
					/>
					
					{!this.state.largeSidebar 
						? <SmallSidebar /> 
						: <LargeSidebar
							toggleLargeSidebar={this.toggleLargeSidebar}
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
