import React from "react";
import logoBigTop from "../../assets/LogoBigTopTransparent.png";
import logoBigBottom from "../../assets/LogoBigBottomTransparent.png";
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
						<img className="logoTop" src={logoBigTop} alt="" />
						<img className="logoBottom" src={logoBigBottom} alt="" />
					</div>
					<div className="verticalLineContainer">
						<div className="verticalLine"></div>
					</div>
					<div className="contactContainer">
						<div className="underConstructionText">
							Diese Website befindet sich derzeit im Aufbau. Bitte kontaktieren
							Sie uns über unten:
						</div>
						<div className="listContainer">
							<div className="contactItem">
								<div className="contactIcon">
									<FaPhone size={24} />
								</div>
								<div className="contactText">0163 1320591</div>
							</div>
							<div className="contactItem">
								<div className="contactIcon">
									<IoLocationSharp size={24} />
								</div>
								<div className="contactText">85307 Paunzhausen</div>
							</div>
							<div className="contactItem">
								<div className="contactIcon">
									<FaInstagramSquare size={24} />
								</div>
								<div className="contactText">kg.aestheticlashes</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UnderConstruction;
