import { NavLink } from "react-router-dom";
import logoSmallBlack from "../../assets/logo_small_black.png";
import logoSmallWhite from "../../assets/logo_small_white.png";
import "./NavBar.scss";

function NavBar({ className, theme }: { className: string; theme: string }) {
	return (
		<nav className={"navBar " + className}>
			<div className="logoContainer">
				<NavLink to="/">
					<img
						className="logoSmall"
						src={theme === "light" ? logoSmallBlack : logoSmallWhite}
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
