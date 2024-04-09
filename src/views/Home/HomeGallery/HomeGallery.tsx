import React, { Component } from "react";
import "./HomeGallery.scss";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

// Fix: npm install --save @types/react-slick
// https://stackoverflow.com/questions/71548268/could-not-find-a-declaration-file-for-module-react-slick
import Slider from "react-slick";

// Fix: npm install slick-carousel --save
// https://stackoverflow.com/questions/48779212/react-slick-import-css-from-slick-carousel-fails
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeGallery() {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 500,
	};

	return (
		<>
			<div className="homeGalleryContainer">
				<SectionHeader header="Galerie" theme="dark"></SectionHeader>
				<div className="slider-container">
					<Slider {...settings}>
						<div>
							<h3>1</h3>
						</div>
						<div>
							<h3>2</h3>
						</div>
						<div>
							<h3>3</h3>
						</div>
						<div>
							<h3>4</h3>
						</div>
						<div>
							<h3>5</h3>
						</div>
						<div>
							<h3>6</h3>
						</div>
					</Slider>
				</div>
			</div>
		</>
	);
}

export default HomeGallery;
