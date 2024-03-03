import React from "react";
import { NavLink } from "react-router-dom";
import logoSmall from "../../assets/LogoSmallTransparent.png";

import "./NavBar.scss";

function NavBar() {
	return (
		<nav className="navBar">
			<div className="logoContainer">
				<NavLink to="/">
					<img className="logoSmall" src={logoSmall} alt="logo" />
				</NavLink>
			</div>
			<div className="menuContainer">
				<NavLink to="uber-mich">Über Mich</NavLink>
				<NavLink to="was-biete-ich">Was Biete Ich</NavLink>
				<NavLink to="preisliste">Preisliste</NavLink>
				<NavLink to="faqs">FAQs</NavLink>
				<NavLink to="galerie">Galerie</NavLink>
				<NavLink to="kontakt">Kontakt</NavLink>
			</div>
		</nav>
	);
}

export default NavBar;
