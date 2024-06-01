import React from "react";
import example from "../../assets/home_gallery_example1.jpg";

import "./Gallery.scss";

function Gallery() {
	return (
		<div className="galleryContainer">
			<div className="galleryTop">
				<div className="galleryTitle fontHeaderBig">Galerie</div>
			</div>
			<div className="galleryContentContainer">
				<div className="galleryLeft">
					<div className="galleryBig">
						<img
							src={example}
							alt="Gallery Example"
							loading="lazy"
							decoding="async"></img>
					</div>
					<div className="gallerySmall">
						<img
							src={example}
							alt="Gallery Example"
							loading="lazy"
							decoding="async"></img>
						<img
							src={example}
							alt="Gallery Example"
							loading="lazy"
							decoding="async"></img>
						<img
							src={example}
							alt="Gallery Example"
							loading="lazy"
							decoding="async"></img>
						<img
							src={example}
							alt="Gallery Example"
							loading="lazy"
							decoding="async"></img>
					</div>
				</div>
				<div className="galleryRight">
					<div className="gallerySmall">
						<img
							src={example}
							alt="Gallery Example"
							loading="lazy"
							decoding="async"></img>
						<img
							src={example}
							alt="Gallery Example"
							loading="lazy"
							decoding="async"></img>
						<img
							src={example}
							alt="Gallery Example"
							loading="lazy"
							decoding="async"></img>
						<img
							src={example}
							alt="Gallery Example"
							loading="lazy"
							decoding="async"></img>
					</div>
					<div className="galleryBig">
						<img
							src={example}
							alt="Gallery Example"
							loading="lazy"
							decoding="async"></img>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Gallery;
