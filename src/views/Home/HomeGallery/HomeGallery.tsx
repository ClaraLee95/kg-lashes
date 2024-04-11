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

import example1 from "../../../assets/home_gallery_example1.jpg";
import example2 from "../../../assets/home_gallery_example2.jpg";
import example3 from "../../../assets/home_gallery_example3.jpg";
import example4 from "../../../assets/home_gallery_example4.jpg";
import example5 from "../../../assets/home_gallery_example5.jpg";
import example6 from "../../../assets/home_gallery_example6.jpg";
import example7 from "../../../assets/home_gallery_example7.jpg";

function HomeGallery() {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "20px",
		slidesToShow: 3,
		speed: 500,
	};

	return (
		<>
			<div className="homeGalleryContainer">
				<SectionHeader header="Galerie" theme="dark"></SectionHeader>
				<div className="slider-container">
					<Slider {...settings}>
						<div className="sliderImageContainer">
							<img src={example1} alt="Home Gallery Example"></img>
						</div>
						<div className="sliderImageContainer">
							<img src={example2} alt="Home Gallery Example"></img>
						</div>
						<div className="sliderImageContainer">
							<img src={example3} alt="Home Gallery Example"></img>
						</div>
						<div className="sliderImageContainer">
							<img src={example4} alt="Home Gallery Example"></img>
						</div>
						<div className="sliderImageContainer">
							<img src={example5} alt="Home Gallery Example"></img>
						</div>
						<div className="sliderImageContainer">
							<img src={example6} alt="Home Gallery Example"></img>
						</div>
						<div className="sliderImageContainer">
							<img src={example7} alt="Home Gallery Example"></img>
						</div>
					</Slider>
				</div>
			</div>
		</>
	);
}

export default HomeGallery;
