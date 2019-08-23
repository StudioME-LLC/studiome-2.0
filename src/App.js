import React from 'react';
import './App.scss';

import Logo from "./assets/PNGs/StudioME-Logo.png";

// Components
import SmallSidebar from './components/Navigation/SmallSidebar';

// SVGs
import { ReactComponent as MenuButton } from './assets/SVGs/menu.svg';
import { ReactComponent as Cart } from './assets/SVGs/shopping-cart.svg';
import { ReactComponent as User } from './assets/SVGs/user.svg';

// Large Sidebar SVGs
import { ReactComponent as RentalIcon } from './assets/SVGs/largeSidebar/camera.svg';
import { ReactComponent as ServiceIcon } from './assets/SVGs/largeSidebar/video-camera.svg';
import { ReactComponent as MembershipsIcon } from './assets/SVGs/largeSidebar/profile.svg';
import { ReactComponent as CheckoutIcon } from './assets/SVGs/largeSidebar/cart.svg';

import { ReactComponent as GeneralIcon } from './assets/SVGs/largeSidebar/info.svg';
import { ReactComponent as TeamIcon } from './assets/SVGs/largeSidebar/users.svg';
import { ReactComponent as WorkIcon } from './assets/SVGs/largeSidebar/film.svg';

import { ReactComponent as LearnIcon } from './assets/SVGs/largeSidebar/bookmark.svg';
import { ReactComponent as EventsIcon } from './assets/SVGs/largeSidebar/calendar.svg';
import { ReactComponent as PodcastIcon } from './assets/SVGs/largeSidebar/mic.svg';

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

						{/*Book*/}
						<div className="large-sidebar__header">
							Book
						</div>
						<div className="large-sidebar__section">
							<RentalIcon className='large-sidebar__button-icon' />
							<p>Rental & DIY</p>
						</div>
						<div className="large-sidebar__section">
							<ServiceIcon className='large-sidebar__button-icon' />
							<p>Full Service</p>
						</div>
						<div className="large-sidebar__section">
							<MembershipsIcon className='large-sidebar__button-icon' />
							<p>Memberships</p>
						</div>
						<div className="large-sidebar__section">
							<CheckoutIcon className='large-sidebar__button-icon' />
							<p>Checkout</p>
						</div>

						{/*About*/}
						<div className="large-sidebar__header">
							About
						</div>
						<div className="large-sidebar__section">
							<GeneralIcon className='large-sidebar__button-icon' />
							<p>General</p>
						</div>
						<div className="large-sidebar__section">
							<TeamIcon className='large-sidebar__button-icon' />
							<p>Team</p>
						</div>
						<div className="large-sidebar__section">
							<WorkIcon className='large-sidebar__button-icon' />
							<p>Our Work</p>
						</div>

						{/*Our Projects*/}
						<div className="large-sidebar__header">
							Our Projects
						</div>
						<div className="large-sidebar__section">
							<LearnIcon className='large-sidebar__button-icon' />
							<p>Learn</p>
						</div>
						<div className="large-sidebar__section">
							<EventsIcon className='large-sidebar__button-icon' />
							<p>Studio Events</p>
						</div>
						<div className="large-sidebar__section">
							<PodcastIcon className='large-sidebar__button-icon' />
							<p>Our Podcast</p>
						</div>

						{/*Contact*/}
						<div className="large-sidebar__header">
							Contact
						</div>
					</div>
				)}

				<div className="main">Main Content</div>
				<div className="footer"></div>
			</div>
		);
	}
}
