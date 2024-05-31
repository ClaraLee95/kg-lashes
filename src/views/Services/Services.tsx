import React from "react";
import image from "../../assets/services_example.png";

import "./Services.scss";

function Services() {
	return (
		<div className="servicesContainer">
			<div className="servicesTop">
				<div className="servicesTitle fontHeaderBig">Was Biete Ich</div>
				<div className="servicesSubtitle">
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex.
				</div>
			</div>
			<div className="servicesImage">
				<img src={image} alt="Was Biete Ich" />
			</div>
			<div className="servicesText fontText">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur.
				<br />
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
				amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</div>
		</div>
	);
}

export default Services;
