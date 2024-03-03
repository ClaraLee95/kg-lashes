import React from "react";
import image from "../../assets/background.jpg";

import "./Services.scss";

function Services() {
	return (
		<div>
			<h1>Was Biete Ich</h1>
			<img
				className=""
				src={image}
				alt=""
				style={{ width: 1200, margin: "auto" }}
			/>
		</div>
	);
}

export default Services;
