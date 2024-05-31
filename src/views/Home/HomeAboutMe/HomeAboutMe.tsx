import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import HomeCard from "../../../components/Card/HomeCard/HomeCard";
import profile from "../../../assets/home_about_me_example.jpg";
import "./HomeAboutMe.scss";

function HomeAboutMe() {
	const aboutMeHeader = "Über Mich",
		aboutMeText =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";

	const extra = (
		<>
			<div className="homeCardExtraQuoteLeft">
				<BiSolidQuoteAltLeft className="quoteSymbol" size="4rem" />
			</div>
			<div className="homeCardExtraQuoteText fontSubheader">
				Mein Ziel ist es,{" "}
				<mark className="scrollHighlight">Deine Schonheit zu betonen,</mark>{" "}
				damit Du dich in Deiner Haut wohl fülst.
			</div>
			<div className="homeCardExtraQuoteRight">
				<BiSolidQuoteAltRight className="quoteSymbol" size="4rem" />
			</div>
		</>
	);

	return (
		<div className="homeAboutMeContainer">
			<HomeCard
				image={{
					src: profile,
					alt: "Katharina Gleixner",
					location: "left",
				}}
				content={{
					header: aboutMeHeader,
					text: aboutMeText,
					button: { theme: "light", text: "Mehr" },
					extra: extra,
				}}
				nav="uber-mich"
				settings={{
					extraPlaced: true,
					headerPlaced: true,
					buttonPlaced: true,
				}}></HomeCard>
		</div>
	);
}

export default HomeAboutMe;
