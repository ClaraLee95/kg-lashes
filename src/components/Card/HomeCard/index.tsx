import { NavLink } from "react-router-dom";
import { type HomeCardType } from "../../../lib/types";
import Button from "../../Button";
import SectionHeader from "../../SectionHeader";

import "./index.scss";

function HomeCard({ image, content, nav, settings }: HomeCardType) {
	const imgLocation = image.location === "left" ? "imageLeft" : "imageRight";
	return (
		<div className={"homeCardContainer " + imgLocation}>
			<div className="homeCardImageContainer">
				<img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
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
								header={content.header!}
								theme="dark"
								direction="left"></SectionHeader>
						) : null}
					</div>
					<div className="homeCardContentText">{content.text}</div>
					<div className="homeCardContentButton">
						{settings.buttonPlaced && content.button ? (
							<NavLink to={nav!} style={{ textDecoration: "none" }}>
								<Button
									theme={content.button.theme}
									text={content.button.text}
									switchTheme="switchOnSmall"></Button>
							</NavLink>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeCard;