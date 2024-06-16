import { NavLink } from "react-router-dom";
import logoSmallBlack from "../../../assets/logo_small_black.png";
import logoSmallWhite from "../../../assets/logo_small_white.png";
import FullNavMenu from "../FullNavMenu/FullNavMenu";
import "./MenuBar.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function MenuBar({ className, theme }: { className: string; theme: string }) {
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
				<div className="menuContainerFullNav">
					<FullNavMenu></FullNavMenu>
				</div>
				<div className="menuContainerHamburger">
					<HamburgerMenu></HamburgerMenu>
				</div>
			</div>
		</nav>
	);
}

export default MenuBar;
