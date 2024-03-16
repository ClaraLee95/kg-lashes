import React from "react";
import "./Card.scss";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

type ImageProps = {
	location: string;
	src: string;
	alt: string;
};

type ContentProps = {
	header: string;
	text: string;
	button: JSX.Element;
};

type CardProps = {
	image: ImageProps;
	content: ContentProps;
};

function Card({ image, content }: CardProps) {
	const imgLocation = image.location === "left" ? "imageLeft" : "imageRight";
	return (
		<div className={imgLocation}>
			<div className="cardImageContainer">
				<img src={image.src} alt={image.alt} />
			</div>
			<div className="cardContentContainer fontText">
				<div className="cardExtraContainer">
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
				</div>
				<div className="cardContentHeader fontSubheader">{content.header}</div>
				<div className="cardContentText">{content.text}</div>
				<div>{content.button}</div>
			</div>
		</div>
	);
}

export default Card;
