import React from "react";
import "./HomeAboutMe.scss";
import Card from "../../../components/Card/Card";
import profile from "../../../assets/home_about_me_example.jpg";
import Button from "../../../components/Button/Button";

function HomeAboutMe() {
	const button = <Button theme="light" text="Mehr"></Button>;
	const aboutMeHeader = "Über Mich",
		aboutMeText =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";

	return (
		<div className="homeAboutMeContainer">
			<Card
				image={{
					src: profile,
					alt: "Katharina Gleixner",
					location: "left",
				}}
				content={{
					header: aboutMeHeader,
					text: aboutMeText,
					button: button,
				}}></Card>
		</div>
	);
}

export default HomeAboutMe;
