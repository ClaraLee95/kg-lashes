import React from "react";
import { NavLink } from "react-router-dom";
import { HomeCardProps } from "../../../lib/types";
import Button from "../../../components/Button/Button";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import "./HomeCard.scss";

function HomeCard({ image, content, nav }: HomeCardProps) {
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
						<NavLink to={nav} style={{ textDecoration: "none" }}>
							<Button
								theme={content.button.theme}
								text={content.button.text}></Button>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeCard;
