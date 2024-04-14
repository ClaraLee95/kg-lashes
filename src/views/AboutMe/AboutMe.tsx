import React from "react";
import aboutMe1 from "../../assets/about_me_example1.webp";
import aboutMe2 from "../../assets/about_me_example2.webp";

import "./AboutMe.scss";
function AboutMe() {
	return (
		<div className="aboutMeContainer">
			<div className="aboutMeHeaderContainer">
				<div className="aboutMeHeaderName fontCursive">Katharina Gleixner</div>
				<img src={aboutMe1} alt="" />
			</div>
			<div className="aboutMeContentContainer"></div>
		</div>
	);
}

export default AboutMe;
