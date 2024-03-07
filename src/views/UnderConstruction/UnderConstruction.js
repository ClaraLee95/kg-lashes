import React from "react";
import logoBig from "../../assets/logo_big_black.png";
import "./UnderConstruction.scss";

import { FaPhone } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function UnderConstruction() {
	return (
		<div>
			<div className="backgroundContainer">
				<div className="infoContainer">
					<div className="logoBigContainer">
						<img className="logo" src={logoBig} alt="KG Aesthetic Lashes" />
					</div>
					<div className="verticalLineContainer">
						<div className="verticalLine"></div>
					</div>
					<div className="contactContainer">
						<div className="underConstructionText">
							Diese Website befindet sich derzeit im Aufbau. Bitte kontaktieren
							Sie uns über:
						</div>
						<div className="listContainer">
							<div className="contactItem">
								<div className="contactIcon">
									<FaPhone value={{ className: "contactIcon" }} />
								</div>
								<div className="contactText">
									<a
										href="tel:+4901631320591"
										target="_blank"
										rel="noopener noreferrer">
										0163 1320591
									</a>
								</div>
							</div>
							<div className="contactItem">
								<div className="contactIcon">
									<IoLocationSharp value={{ className: "contactIcon" }} />
								</div>
								<div className="contactText">
									<a
										href="https://maps.app.goo.gl/nrpRBojQKBVuDACt8"
										target="_blank"
										rel="noopener noreferrer">
										85307 Paunzhausen
									</a>
								</div>
							</div>
							<div className="contactItem">
								<div className="contactIcon">
									<FaInstagramSquare value={{ className: "contactIcon" }} />
								</div>
								<div className="contactText">
									<a
										href="https://www.instagram.com/kg.aestheticlashes/"
										target="_blank"
										rel="noopener noreferrer">
										kg.aestheticlashes
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UnderConstruction;
