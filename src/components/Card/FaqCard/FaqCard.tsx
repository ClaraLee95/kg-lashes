import React from "react";
import { NavLink } from "react-router-dom";
import { FaqCardProps } from "../../../lib/types";
import Button from "../../../components/Button/Button";
import "./FaqCard.scss";

function FaqCard({ content }: FaqCardProps) {
	return (
		<div className="faqCardContentContainer fontText">
			<div className="faqCardContentHeader fontSubheader">{content.header}</div>
			<div className="faqCardContentText">{content.text}</div>
			<div className="faqCardButtonContainer">
				{content.button ? (
					<NavLink to="faqs" style={{ textDecoration: "none" }}>
						<Button
							theme={content.button.theme}
							text={content.button.text}></Button>
					</NavLink>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default FaqCard;
