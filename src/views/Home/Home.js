import React from "react";
import logoBigTransparentWhite from "../../assets/LogoBigTransparentWhite.png";

import "./Home.scss";

function Home() {
	return (
		<div className="container">
			<img
				className="logoBigTransparentWhite"
				src={logoBigTransparentWhite}
				alt=""
				style={{ width: 500, margin: "auto" }}
			/>
		</div>
	);
}

export default Home;
