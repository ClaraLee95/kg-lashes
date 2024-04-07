import React from "react";
import "./HomeAboutMe.scss";
import Card from "../../../components/Card/Card";
import profile from "../../../assets/home_about_me_example.jpg";
import Button from "../../../components/Button/Button";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

function HomeAboutMe() {
	const button = <Button theme="light" text="Mehr"></Button>;
	const aboutMeHeader = "Über Mich",
		aboutMeText =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";

	const extra = (
		<>
			<div className="cardExtraQuoteLeft">
				<BiSolidQuoteAltLeft className="quoteSymbol" size="4rem" />
			</div>
			<div className="cardExtraQuoteText fontHeader">
				Mein Ziel ist es, Deine Schonheit zu betonen,
				<mark className="scrollHighlight">aspernatur voluptas numquam</mark>
				damit Du dich in Deiner Haut wohl fülst.
			</div>
			<div className="cardExtraQuoteRight">
				<BiSolidQuoteAltRight className="quoteSymbol" size="4rem" />
			</div>
		</>
	);

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
					extra: extra,
				}}></Card>
		</div>
	);
}

export default HomeAboutMe;
