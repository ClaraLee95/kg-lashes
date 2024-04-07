import React from "react";
import "./FaqCard.scss";
import { FaqCardProps } from "../../../lib/types";
import Button from "../../../components/Button/Button";

function FaqCard({ content }: FaqCardProps) {
	return (
		<div className="faqCardContentContainer fontText">
			<div className="faqCardContentHeader fontSubheader">{content.header}</div>
			<div className="faqCardContentText">{content.text}</div>
			<div>
				<Button
					theme={content.button.theme}
					text={content.button.text}></Button>
			</div>
		</div>
	);
}

export default FaqCard;
