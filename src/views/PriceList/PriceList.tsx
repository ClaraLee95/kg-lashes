import PriceListCard from "../../components/Card/PriceListCard/PriceListCard";
import "./PriceList.scss";

import example from "../../assets/home_gallery_example1.jpg";

function PriceList() {
	const items = [
		{
			image: {
				src: example,
				alt: "Classic",
			},
			content: {
				header: "Classic Type",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			},
			priceList: [
				{ title: "Neu", prices: [100] },
				{
					title: "Auffüllen bis 2 Wochen",
					prices: [40],
				},
				{
					title: "Auffüllen bis 3 Wochen",
					prices: [50],
				},
				{
					title: "Auffüllen bis 4 Wochen",
					prices: [80],
				},
			],
		},
		{
			image: {
				src: example,
				alt: "Another Type",
			},
			content: {
				header: "Another Type",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			},
			priceList: [
				{ title: "Neu", prices: [100] },
				{
					title: "Auffüllen bis 2 Wochen",
					prices: [40],
				},
				{
					title: "Auffüllen bis 3 Wochen",
					prices: [50],
				},
				{
					title: "Auffüllen bis 4 Wochen",
					prices: [80],
				},
			],
		},
		{
			image: {
				src: example,
				alt: "Another Type 3",
			},
			content: {
				header: "Another Type 3",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			},
			priceList: [
				{ title: "Neu", prices: [100] },
				{
					title: "Auffüllen bis 2 Wochen",
					prices: [40],
				},
				{
					title: "Auffüllen bis 3 Wochen",
					prices: [50],
				},
				{
					title: "Auffüllen bis 4 Wochen",
					prices: [80],
				},
			],
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
					header: item.content.header,
					text: item.content.text,
					extra: null,
				}}
				priceList={item.priceList}></PriceListCard>
		);
	});

	return (
		<div className="priceListContainer">
			<div className="priceListHeaderContainer backgroundDark">
				<div className="priceListHeader fontHeaderBig fontLight">
					Preisliste
				</div>
			</div>
			<div className="priceListContentContainer">{renderList}</div>
		</div>
	);
}

export default PriceList;
