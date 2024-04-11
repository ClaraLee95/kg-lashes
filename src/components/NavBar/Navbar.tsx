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
				<NavLink to="/" style={{ textDecoration: "none" }}>
					Home
				</NavLink>
				<NavLink to="uber-mich" style={{ textDecoration: "none" }}>
					Über Mich
				</NavLink>
				<NavLink to="was-biete-ich" style={{ textDecoration: "none" }}>
					Was Biete Ich
				</NavLink>
				<NavLink to="preisliste" style={{ textDecoration: "none" }}>
					Preisliste
				</NavLink>
				<NavLink to="faqs" style={{ textDecoration: "none" }}>
					FAQs
				</NavLink>
				<NavLink to="galerie" style={{ textDecoration: "none" }}>
					Galerie
				</NavLink>
				<NavLink to="kontakt" style={{ textDecoration: "none" }}>
					Kontakt
				</NavLink>
			</div>
		</nav>
	);
}

export default NavBar;
