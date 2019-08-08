import React from 'react';
import './App.scss';

import { ReactComponent as MenuButton } from './assets/SVGs/menu.svg';

function App() {
	return (
		<div className="container">
			<div className="header">
				<button className="header__menu-button">
					<MenuButton className="header__menu-icon" />
				</button>
				<div className="header__logo">Logo</div>
				<div className="header__cart">Cart</div>
				<div className="header__profile">Profile</div>
			</div>
			<div className="sidebar"></div>
			<div className="main">Main Content</div>
			<div className="footer"></div>
		</div>
	);
}

export default App;
