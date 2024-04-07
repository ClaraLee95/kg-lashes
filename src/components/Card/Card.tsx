import React from "react";
import "./Card.scss";
import { CardProps } from "../../lib/types";

function Card({ image, content }: CardProps) {
	const imgLocation = image.location === "left" ? "imageLeft" : "imageRight";
	return (
		<div className={imgLocation}>
			<div className="cardImageContainer">
				<img src={image.src} alt={image.alt} />
			</div>
			<div className="cardContentContainer fontText">
				<div className={content.extra ? "cardExtraContainer" : ""}>
					{content.extra}
				</div>
				<div className={content.extra ? "" : "extraContainerEmpty"}>
					<div className="cardContentHeader fontSubheader">
						{content.header}
					</div>
					<div className="cardContentText">{content.text}</div>
					<div>{content.button}</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
