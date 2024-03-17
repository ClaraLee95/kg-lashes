import React from "react";
import image from "../../assets/background.jpg";

import "./Gallery.scss";

function Gallery() {
	return (
		<div>
			<h1>Gallery</h1>
			<img
				className=""
				src={image}
				alt=""
				style={{ width: 1200, margin: "auto" }}
			/>
		</div>
	);
}

export default Gallery;
