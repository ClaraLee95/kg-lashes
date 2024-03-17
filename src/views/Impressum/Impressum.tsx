import React from "react";
import image from "../../assets/background.jpg";

import "./Impressum.scss";

function Impressum() {
	return (
		<div>
			<h1>Impressum</h1>
			<img
				className=""
				src={image}
				alt=""
				style={{ width: 1200, margin: "auto" }}
			/>
		</div>
	);
}

export default Impressum;
