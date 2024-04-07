import React from "react";
import "./HomeCard.scss";
import { HomeCardProps } from "../../../lib/types";
import Button from "../../../components/Button/Button";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

function HomeCard({ image, content }: HomeCardProps) {
	const imgLocation = image.location === "left" ? "imageLeft" : "imageRight";
	return (
		<div className={imgLocation}>
			<div className="homeCardImageContainer">
				<img src={image.src} alt={image.alt} />
			</div>
			<div className="homeCardContentContainer fontText">
				<div className={content.extra ? "homeCardExtraContainer" : ""}>
					{content.extra}
				</div>
				<div>
					<div className="homeCardContentHeader">
						<SectionHeader header={content.header} theme="dark"></SectionHeader>
					</div>
					<div className="homeCardContentText">{content.text}</div>
					<div>
						<Button
							theme={content.button.theme}
							text={content.button.text}></Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeCard;
