import React from 'react';
import './App.scss';

import Logo from "./assets/PNGs/StudioME-Logo.png";

// Components
import SmallSidebar from './components/Navigation/SmallSidebar';

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
	}

	render() {
		return (
			<div className={!this.state.largeSidebar ? "small-sidebar-container" : "large-sidebar-container"}>
				<div className="header">
					<button
						onClick={this.toggleLargeSidebar}
						className="header__menu-button"
					>
						<MenuButton className="header__menu-icon" />
					</button>
					<div className="header__fab">
						<img src={Logo} alt="Logo" className="header__logo"/>
					</div>
					<button className="header__cart-button">
						<Cart className="header__cart-icon" />
					</button>
					<button className="header__user-button">
						<User className="header__user-icon" />
					</button>
				</div>

				{!this.state.largeSidebar ? <SmallSidebar /> : (
					<div className="large-sidebar">
					Test
				</div>
				)}

				<div className="main">Main Content</div>
				<div className="footer"></div>
			</div>
		);
	}
}
