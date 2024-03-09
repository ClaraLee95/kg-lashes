import React from "react";
import "./Card.scss";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

function Card(props) {
	const imgLocation =
		props.image.location === "left" ? "imageLeft" : "imageRight";
	return (
		<div className={imgLocation}>
			<div className="cardImageContainer">
				<img src={props.image.src} alt={props.image.alt} />
			</div>
			<div className="cardContentContainer fontText">
				<div className="cardExtraContainer">
					<div className="cardExtraQuoteLeft">
						<BiSolidQuoteAltLeft className="quoteSymbol" size="4rem" />
					</div>
					<div className="cardExtraQuoteText fontHeader">
						Mein Ziel ist es, Deine Schonheit zu betonen,
						<mark class="scrollHighlight">aspernatur voluptas numquam</mark>
						damit Du dich in Deiner Haut wohl fülst.
					</div>
					<div className="cardExtraQuoteRight">
						<BiSolidQuoteAltRight className="quoteSymbol" size="4rem" />
					</div>
				</div>
				<div className="cardContentHeader fontSubheader">
					{props.content.header}
				</div>
				<div className="cardContentText">{props.content.text}</div>
				<div>{props.content.button}</div>
			</div>
		</div>
	);
}

export default Card;
