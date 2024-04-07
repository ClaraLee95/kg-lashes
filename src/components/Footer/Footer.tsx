import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.scss";
import Line from "../../components/Line/Line";

function Footer({ className }: { className: string }) {
	const year = new Date().getFullYear();
	return (
		<div className={"footerContainer " + className}>
			<div className="footerRow">
				<div className="footerItem">
					<div className="footerText">&copy;{year} KG Aesthetic Lashes</div>
				</div>
				<Line direction="vertical" theme="dark"></Line>
				<div className="footerItem">
					<NavLink className="footerText" to="/datenschutz">
						Datenschutzerklärung
					</NavLink>
				</div>
				<Line direction="vertical" theme="dark"></Line>
				<div className="footerItem">
					<NavLink className="footerText" to="/impressum">
						Impressum
					</NavLink>
				</div>
				<Line direction="vertical" theme="dark"></Line>
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
