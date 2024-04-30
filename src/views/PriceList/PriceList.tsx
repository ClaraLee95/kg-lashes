import React from "react";
import PriceListCard from "../../components/Card/PriceListCard/PriceListCard";
import "./PriceList.scss";

function PriceList() {
	const items = [
		{
			image: {
				src: "",
				alt: "",
			},
			content: {
				header: "Lorem ipsum dolor sit amet?",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			},
		},
		{
			image: {
				src: "",
				alt: "",
			},
			content: {
				header: "Lorem ipsum dolor sit amet?",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			},
		},
	];

	const renderList = items.map((item) => {
		return (
			<PriceListCard
				image={{
					src: item.image.src,
					alt: item.image.alt,
				}}
				content={{
					header: "Classic",
					text: "",
					extra: null,
				}}></PriceListCard>
		);
	});

	return (
		<div className="priceListContainer">
			<div className="priceListHeaderContainer">
				<div className="priceListHeader fontHeaderBig fontLight">
					Priesliste
				</div>
			</div>
			<div className="priceListContentContainer">
				<PriceListCard
					image={{
						src: "",
						alt: "Katharina Gleixner",
					}}
					content={{
						header: "Classic",
						text: "",
						button: { theme: "light", text: "Mehr" },
						extra: null,
					}}></PriceListCard>
			</div>
		</div>
	);
}

export default PriceList;
