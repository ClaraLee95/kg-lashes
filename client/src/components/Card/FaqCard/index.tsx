import { NavLink } from "react-router-dom";
import { type FaqCardType } from "../../../lib/types";
import Button from "../../Button";

import "./index.scss";

function FaqCard({ content }: FaqCardType) {
	return (
		<div className="faqCardContentContainer fontText">
			<div className="faqCardContentHeader fontSubheader">{content.header}</div>
			<div className="faqCardContentText">{content.text}</div>
			<div className="faqCardButtonContainer">
				{content.button ? (
					<NavLink to="faqs" style={{ textDecoration: "none" }}>
						<Button
							theme={content.button.theme}
							text={content.button.text}
							switchTheme="switchOnSmall"></Button>
					</NavLink>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default FaqCard;