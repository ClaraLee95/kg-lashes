import React from "react";
import { NavLink } from "react-router-dom";
import logoSmall from "../../assets/logo_small_black.png";

import "./NavBar.scss";

function NavBar() {
	return (
		<nav className="navBar">
			<div className="logo">
				<NavLink to="/">
					<img className="logoSmall" src={logoSmall} alt="KG Aesthetic Lashes" />
				</NavLink>
			</div>
		</nav>
	);
}

export default NavBar;
