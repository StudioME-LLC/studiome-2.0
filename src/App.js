import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {  Link } from 'react-router-dom';

import './App.scss';

// Components
import SmallSidebar from './components/Navigation/SmallSidebar';
import LargeSidebar from './components/Navigation/LargeSidebar';
import Backdrop from './components/Navigation/Backdrop';

// PNGs
import Logo from "./assets/PNGs/StudioME-Logo.png";

// SVGs
import { ReactComponent as MenuButton } from './assets/SVGs/menu.svg';
import { ReactComponent as Cart } from './assets/SVGs/shopping-cart.svg';
import { ReactComponent as User } from './assets/SVGs/user.svg';

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
				<div className={!this.state.largeSidebar ? "small-sidebar-container" : "large-sidebar-container"}>
					<div className="header">
						<button
							onClick={this.toggleLargeSidebar}
							className="header__menu-button"
						>
							<MenuButton className="header__menu-icon" />
						</button>
						<Link className="header__fab" to="/">
							<img src={Logo} alt="Logo" className="header__logo"/>
						</Link>
						<button className="header__cart-button">
							<Cart className="header__cart-icon" />
						</button>
						<button className="header__user-button">
							<User className="header__user-icon" />
						</button>
					</div>

					{!this.state.largeSidebar ? <SmallSidebar /> : <LargeSidebar />}

					<div className="main">
						{this.state.largeSidebar && <div onClick={this.toggleLargeSidebar} ><Backdrop /></div>}
						<Switch>
							<Route path="/" exact>Home Page</Route>
							<Route path="/checkout" exact>Checkout Page</Route>
							<Route path="/about" exact>About Page</Route>
							<Route path="/projects" exact>Our Projects Page</Route>
							<Route path="/contact" exact>Contact Page</Route>
							<Redirect to="/" exact />
						</Switch>
					</div>
					<div className="footer"></div>
				</div>
			</BrowserRouter>
		);
	}
}
