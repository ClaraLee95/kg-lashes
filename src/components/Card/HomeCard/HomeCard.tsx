import React from "react";
import { NavLink } from "react-router-dom";
import { HomeCardProps } from "../../../lib/types";
import Button from "../../../components/Button/Button";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import "./HomeCard.scss";

function HomeCard({ image, content, nav, settings }: HomeCardProps) {
	const imgLocation = image.location === "left" ? "imageLeft" : "imageRight";
	return (
		<div className={imgLocation}>
			<div className="homeCardImageContainer">
				<img src={image.src} alt={image.alt} />
			</div>
			<div className="homeCardContentContainer fontText">
				{settings.extraPlaced ? (
					<div className={content.extra ? "homeCardExtraContainer" : ""}>
						{content.extra}
					</div>
				) : null}
				<div>
					<div className="homeCardContentHeader">
						{settings.headerPlaced ? (
							<SectionHeader
								header={content.header}
								theme="dark"></SectionHeader>
						) : null}
					</div>
					<div className="homeCardContentText">{content.text}</div>
					<div>
						{settings.buttonPlaced && content.button ? (
							<NavLink to={nav} style={{ textDecoration: "none" }}>
								<Button
									theme={content.button.theme}
									text={content.button.text}></Button>
							</NavLink>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeCard;
