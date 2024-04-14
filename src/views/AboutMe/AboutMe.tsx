import React from "react";
import image from "../../assets/background.jpg";

import "./AboutMe.scss";

function AboutMe() {
	return (
		<div className="aboutMeContainer">
			<h1>Uber Mich</h1>
			<img
				className=""
				src={image}
				alt=""
				style={{ width: 1200, margin: "auto" }}
			/>
		</div>
	);
}

export default AboutMe;
