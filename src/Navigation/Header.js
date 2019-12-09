import React from 'react';
import {  Link } from 'react-router-dom';

// PNGs
import Logo from "../assets/navigation/PNGs/StudioME-Logo.png";

// SVGs
import { ReactComponent as MenuButton } from '../assets/navigation/SVGs/menu.svg';
import { ReactComponent as Cart } from '../assets/navigation/SVGs/shopping-cart.svg';
import { ReactComponent as User } from '../assets/navigation/SVGs/user.svg';

export default function Header(props) {
    return (
        <div className="header">
            <button
                aria-label="Menu"
                title="Menu"
                onClick={props.toggleLargeSidebar}
                className="header__menu-button"
            >
                <MenuButton className="header__menu-icon" />
            </button >

            <Link
                aria-label="Home" 
                title="Home"
                onClick={props.onScrollHome}
                className="header__fab" to="/"
            >
                <img src={Logo} alt="Logo" className="header__logo"/>
            </Link>

            <a
                aria-label="Cart"
                href="https://studiome.me/cart/"
            >
                <button className="header__cart-button">
                    <Cart className="header__cart-icon" />
                </button>
            </a>
            <a 
                aria-label="User"
                href="https://studiome.me/my-account/"
            >
                <button className="header__user-button">
                    <User className="header__user-icon" />
                </button>
            </a>
        </div>
    )
}
