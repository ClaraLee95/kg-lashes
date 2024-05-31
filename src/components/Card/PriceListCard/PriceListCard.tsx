import React from "react";
import { PriceListCardProps } from "../../../lib/types";
import { FaLongArrowAltRight } from "react-icons/fa";
import Line from "../../../components/Line/Line";
import "./PriceListCard.scss";

function PriceListCard({ image, content, priceList }: PriceListCardProps) {
	const renderList = priceList.map((item, index) => {
		let prices, line;
		if (item.prices.length > 1) {
			prices = (
				<>
					<div className="priceStrikeThrough">
						<span className="priceEuroSymbol">&#8364;</span>
						{item.prices[0]}
					</div>
					<div>
						<FaLongArrowAltRight className="priceArrow"></FaLongArrowAltRight>
					</div>
					<div className="priceCurrent">
						<span className="priceEuroSymbol">&#8364;</span>
						{item.prices[1]}
					</div>
				</>
			);
		} else {
			prices = (
				<>
					<div className="priceCurrent">
						<span className="priceEuroSymbol">&#8364;</span>
						{item.prices[0]}
					</div>
				</>
			);
		}

		if (index < priceList.length - 1) {
			line = <Line direction="horizontalThin" theme="grey"></Line>;
		}

		return (
			<>
				<div className="priceOneLineContainer">
					<div className="priceOneLineTitle fontTextBold">{item.title}</div>
					<div className="priceOneLinePrices fontNumber">{prices}</div>
				</div>
				<div>{line}</div>
			</>
		);
	});

	return (
		<div className="priceListCardContentContainer fontText">
			<div className="priceListCardContentLeft">
				<img src={image.src} alt={image.alt} />
			</div>
			<div className="priceListCardContentMiddle">
				<div className="priceListCardContentMiddleHeader fontSubheader">
					{content.header}
				</div>
				<div className="priceListCardContentMiddleText">{content.text}</div>
			</div>
			<Line direction="verticalLong" theme="dark"></Line>
			<div className="priceListCardContentRight">{renderList}</div>
		</div>
	);
}

export default PriceListCard;
