import React from "react";
import { NavLink } from "react-router-dom";
import logoSmall from "../../assets/logo_small_black.png";
import "./NavBar.scss";

function NavBar({ className }: { className: string }) {
	return (
		<nav className={"navBar " + className}>
			<div className="logoContainer">
				<NavLink to="/">
					<img
						className="logoSmall"
						src={logoSmall}
						alt="AG Aesthetic Lashes"
					/>
				</NavLink>
			</div>
			<div className="menuContainer">
				<NavLink to="/">Home</NavLink>
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
