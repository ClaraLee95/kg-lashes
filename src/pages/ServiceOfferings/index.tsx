import SectionHeader from "../../components/SectionHeader";
import HomeCard from "../../components/Card/HomeCard";
import image from "../../assets/services_example.png";

import "./index.scss";

function ServiceOfferings() {
	const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur.`;

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
			<div className="serviceContentContainer">
				<HomeCard
					image={{
						src: image,
						alt: "Was Biete Ich",
						location: "left",
					}}
					content={{
						text: text,
					}}
					settings={{
						extraPlaced: false,
						headerPlaced: false,
						buttonPlaced: false,
					}}></HomeCard>
				<HomeCard
					image={{
						src: image,
						alt: "Was Biete Ich",
						location: "left",
					}}
					content={{
						text: text,
					}}
					settings={{
						extraPlaced: false,
						headerPlaced: false,
						buttonPlaced: false,
					}}></HomeCard>
				<HomeCard
					image={{
						src: image,
						alt: "Was Biete Ich",
						location: "left",
					}}
					content={{
						text: text,
					}}
					settings={{
						extraPlaced: false,
						headerPlaced: false,
						buttonPlaced: false,
					}}></HomeCard>
			</div>
		</div>
	);
}

export default ServiceOfferings;
