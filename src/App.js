import React from 'react';
import './App.scss';

function App() {
	return (
		<div className="container">
			<div className="header">
				<div className="header__menu">Menu</div>
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
