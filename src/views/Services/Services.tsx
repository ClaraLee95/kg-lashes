import React from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import image from "../../assets/services_example.png";
import "./Services.scss";

function Services() {
	return (
		<div className="servicesContainer">
			<div className="servicesTop">
				<div className="servicesTitle fontHeaderBig">Was Biete Ich</div>
				<div className="servicesSubtitle">
					<div className="quoteLeft">
						<SectionHeader
							header="&ldquo;"
							theme="light"
							direction="middle"
							extra="extraBig"></SectionHeader>
					</div>
					<div className="quoteText fontSubheader">
						Mein Ziel ist es,
						<br />
						<mark className="scrollHighlight">Deine Schonheit zu betonen,</mark>
						<br />
						damit Du dich in Deiner Haut wohl fülst.
					</div>
					<div className="quoteRight">
						<SectionHeader
							header="&rdquo;"
							theme="light"
							direction="middle"
							extra="extraBig"></SectionHeader>
					</div>
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
