import React from "react";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import hamburger from "../../assets/hamburger.png";
import logoSmall from "../../assets/LogoSmall2.png";

import "./NavBar.scss";

function NavBar() {
	const [showNavbar, setShowNavbar] = useState(false);

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	return (
		<nav className="navbar">
			<div className="container">
				<div className="logo">
					<NavLink to="/">
						<img className="logoSmall" src={logoSmall} alt="logo" />
					</NavLink>
				</div>
				{/* <div className="menu-icon" onClick={handleShowNavbar}>
					<img className="hamburger" src={hamburger} alt="menu" />
				</div> */}
				<div className={`nav-elements  ${showNavbar && "active"}`}>
					<ul>
						{/* <li>
							<NavLink className="menuItem" to="/">
								Coming Soon
							</NavLink>
						</li>
						<li>
							<NavLink to="/ubermich">Über Mich</NavLink>
						</li>
						<li>
							<NavLink to="/wasbieteich">Was Biete Ich</NavLink>
						</li>
						<li>
							<NavLink to="/faq">FAQ</NavLink>
						</li>
						<li>
							<NavLink to="/preis">Preisliste</NavLink>
						</li>
						<li>
							<NavLink to="/gallery">Gallert</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Kontakt</NavLink>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
