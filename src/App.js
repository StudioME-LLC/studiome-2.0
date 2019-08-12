import React from 'react';
import './App.scss';

import Logo from "./assets/PNGs/StudioME-Logo.png";

// SVGs
import { ReactComponent as MenuButton } from './assets/SVGs/menu.svg';
import { ReactComponent as Cart } from './assets/SVGs/shopping-cart.svg';
import { ReactComponent as User } from './assets/SVGs/user.svg';
import { ReactComponent as Book } from './assets/SVGs/shop.svg';
import { ReactComponent as About } from './assets/SVGs/info-with-circle.svg';
import { ReactComponent as Projects } from './assets/SVGs/video.svg';
import { ReactComponent as Contact } from './assets/SVGs/phone.svg';

function App() {
	return (
		<div className="container">
			<div className="header">
				<button className="header__menu-button">
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
			<div className="sidebar">
				<div className="sidebar__button">
					<Book className='sidebar__button-icon' />
					<p>Book</p>
				</div>
				<div className="sidebar__button">
					<About className='sidebar__button-icon' />
					<p>About</p></div>
				<div className="sidebar__button">
					<Projects className='sidebar__button-icon' />
					<p>Our Projects</p>
				</div>
				<div className="sidebar__button">
					<Contact className='sidebar__button-icon' />
					<p>Contact</p>
				</div>
			</div>
			<div className="main">Main Content</div>
			<div className="footer"></div>
		</div>
	);
}

export default App;
