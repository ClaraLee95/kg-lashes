import React from "react";
import logoBig from "../../assets/LogoBig2.png";
import "./UnderConstruction.scss";

import { FaPhone } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function UnderConstruction() {
	return (
		<div>
			<div className="blurOver"></div>
			<div className="onTopContainer">
				<div className="infoContainer">
					<div className="logoBigContainer">
						<img className="logoBig" src={logoBig} alt="" />
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
			{/* <img className="homeImage" src={blurry} alt="" /> */}
		</div>
	);
}

export default UnderConstruction;
