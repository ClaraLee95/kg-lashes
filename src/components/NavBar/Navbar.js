import React from "react";
import { NavLink } from "react-router-dom";
import logoSmall from "../../assets/LogoSmallTransparent.png";

import "./NavBar.scss";

function NavBar() {
	return (
		<nav className="navBar">
			<div className="container">
				<div className="logo">
					<NavLink to="under_construction">
						<img className="logoSmall" src={logoSmall} alt="logo" />
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
