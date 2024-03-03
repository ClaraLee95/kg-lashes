import React from "react";
import image from "../../assets/background.jpg";

import "./Home.scss";

function Home() {
	return (
		<div>
			<h1>Home</h1>
			<img
				className=""
				src={image}
				alt=""
				style={{ width: 1200, margin: "auto" }}
			/>
		</div>
	);
}

export default Home;
