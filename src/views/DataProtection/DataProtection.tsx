import React from "react";
import image from "@/assets/background.jpg";

import "./DataProtection.scss";

function DataProtection() {
	return (
		<div>
			<h1>Datenschutz</h1>
			<img
				className=""
				src={image}
				alt=""
				style={{ width: 1200, margin: "auto" }}
			/>
		</div>
	);
}

export default DataProtection;
