import React from "react";
import image from "@/assets/background.jpg";

import "./PriceList.scss";

function PriceList() {
	return (
		<div>
			<h1>Price List</h1>
			<img
				className=""
				src={image}
				alt=""
				style={{ width: 1200, margin: "auto" }}
			/>
		</div>
	);
}

export default PriceList;
