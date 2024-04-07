import React from "react";
import "./HomeFAQs.scss";
import FaqCard from "../../../components/Card/FaqCard/FaqCard";

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
	];

	const renderFaqs = items.map((item, index) => {
		return (
			<FaqCard
				content={{
					header: item.header,
					text: item.text,
					button: { theme: "transparent", text: "Mehr" },
				}}></FaqCard>
		);
	});

	return (
		<div className="homeFaqsContainer fontLight">
			<div className="homeFaqsCardContainer container">
				<div>
					<div>FAQs</div>
					<div className="verticalLine"></div>
				</div>
				{renderFaqs}
			</div>
		</div>
	);
}

export default HomeFAQs;