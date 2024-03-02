import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className="footerContainer">
			<div className="footerRow">
				<div className="footerItem">
					<div className="footerText">&copy;{year} KG Aesthetic Lashes</div>
				</div>
				<div className="lineContainer">
					<div className="line"></div>
				</div>
				<div className="footerItem">
					<NavLink className="footerText" to="/datenschutz">
						Datenschutzerklärung
					</NavLink>
				</div>
				<div className="lineContainer">
					<div className="line"></div>
				</div>
				<div className="footerItem">
					<NavLink className="footerText" to="/impressum">
						Impressum
					</NavLink>
				</div>
				<div className="lineContainer">
					<div className="line"></div>
				</div>
				<div className="footerItem">
					<NavLink className="footerText" to="/kontakt">
						Kontakt
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Footer;
