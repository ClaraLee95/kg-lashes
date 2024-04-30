import React from "react";
import { PriceListCardProps } from "../../../lib/types";
import Line from "../../../components/Line/Line";
import "./PriceListCard.scss";

function PriceListCard({ image, content }: PriceListCardProps) {
	return (
		<div className="priceListCardContentContainer fontText">
			<div className="priceListCardContentLeft">
				<img src={image.src} alt={image.alt} />
			</div>
			<div className="priceListCardContentMiddle">Middle</div>
			<Line direction="vertical" theme="dark"></Line>
			<div className="priceListCardContentRight">Right</div>
		</div>
	);
}

export default PriceListCard;
