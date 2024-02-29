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
			<div className="footerRow">
				<div className="footerColumn">
					<div className="columnHeater">KG Aesthetic Lashes</div>
					<div className="listContainer">
						<div className="contactItem">
							<div className="contactIcon">
								<FaPhone size={12} />
							</div>
							<div className="contactText">0163 1320591</div>
						</div>
						<div className="contactItem">
							<div className="contactIcon">
								<IoLocationSharp size={12} />
							</div>
							<div className="contactText">85307 Paunzhausen</div>
						</div>
						<div className="contactItem">
							<div className="contactIcon">
								<FaInstagramSquare size={12} />
							</div>
							<div className="contactText">kg.aestheticlashes</div>
						</div>
					</div>
				</div>
				<div className="footerColumn">
					<div className="columnHeater"></div>
					<ul className="columnList">
						<li>
							<NavLink className="menuItem" to="/datenschutzerklärung">
								Datenschutzerklärung
							</NavLink>
						</li>
						<li>
							<NavLink className="menuItem" to="/impressum">
								Impressum
							</NavLink>
						</li>
						<li>
							<NavLink className="menuItem" to="/kontakt">
								Kontakt
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<div className="footerRow">&copy;{year} KG Aesthetic Lashes</div>
		</div>
	);
}

export default Footer;
