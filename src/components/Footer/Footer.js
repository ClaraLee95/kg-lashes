import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import "./Footer.scss";

function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className="footerContainer">
			<div className="verticalLineContainer">
				<div className="verticalLine"></div>
			</div>
			<div className="footerRow">
				<div className="footerItem">&copy;{year} KG Aesthetic Lashes</div>
				<div className="footerItem">
					<NavLink className="menuItem" to="/datenschutzerklärung">
						Datenschutzerklärung
					</NavLink>
				</div>
				<div className="footerItem">
					<NavLink className="menuItem" to="/impressum">
						Impressum
					</NavLink>
				</div>
				<div className="footerItem">
					<NavLink className="menuItem" to="/kontakt">
						Kontakt
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Footer;
