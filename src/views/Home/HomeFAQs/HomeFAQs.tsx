import React from "react";
import "./HomeFAQs.scss";
import FaqCard from "../../../components/Card/FaqCard/FaqCard";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

function HomeFAQs() {
	const items = [
		{
			header: "Lorem ipsum dolor sit amet?",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			header: "Duis aute irure dolor in reprehenderit?",
			text: "Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
		},
		{
			header: "Ut enim ad minim?",
			text: "Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			header: "Duis aute irure dolor?",
			text: "Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
	];

	const renderFaqs = items.map((item, index) => {
		return (
			<FaqCard
				key={"faq_card_" + item.header}
				content={{
					header: item.header,
					text: item.text,
					button: { theme: "transparent", text: "Mehr" },
				}}></FaqCard>
		);
	});

	return (
		<div className="homeFaqsContainer backgroundDark fontLight">
			<div className="container">
				<div className="homeFaqsSectionHeader">
					<SectionHeader
						header="FAQs"
						theme="light"
						direction="left"></SectionHeader>
				</div>
				<div className="homeFaqsCardContainer">{renderFaqs}</div>
			</div>
		</div>
	);
}

export default HomeFAQs;
