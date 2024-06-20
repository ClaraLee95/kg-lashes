import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaArrowRightFromBracket } from "react-icons/fa6";

import "./HamburgerMenu.scss";

function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="hamburgerMenuContainer">
			<div className="hamburgerMenuIcon" onClick={toggleMenu}>
				<RxHamburgerMenu size={30} />
			</div>
			<div className={`hamburgerSideContainer ${isOpen ? "open" : ""}`}>
				<button className="sideCloseIcon" onClick={toggleMenu}>
					<RiCloseLargeLine size={30} />
				</button>
				<NavLink
					to="/"
					style={{
						textDecoration: "none",
						color: "white",
					}}>
					Home
				</NavLink>
				<NavLink
					to="uber-mich"
					style={{
						textDecoration: "none",
						color: "white",
					}}>
					Über Mich
				</NavLink>
				<NavLink
					to="was-biete-ich"
					style={{
						textDecoration: "none",
						color: "white",
					}}>
					Was Biete Ich
				</NavLink>
				<NavLink
					to="preisliste"
					style={{
						textDecoration: "none",
						color: "white",
					}}>
					Preisliste
				</NavLink>
				<NavLink
					to="faqs"
					style={{
						textDecoration: "none",
						color: "white",
					}}>
					FAQs
				</NavLink>
				<NavLink
					to="galerie"
					style={{
						textDecoration: "none",
						color: "white",
					}}>
					Galerie
				</NavLink>
				<NavLink
					to="kontakt"
					style={{
						textDecoration: "none",
						color: "white",
					}}>
					Kontakt
				</NavLink>
			</div>
		</div>
	);
}

export default HamburgerMenu;
