import React from "react";
import logoBigWhite from "../../../assets/logo_big_white_no_shadow.png";
import blob from "../../../assets/background_blob.gif";
import "./HomeLogo.scss";

function HomeLogo() {
	return (
		<div className="homeLogoContainer">
			<img
				className="blob"
				src={blob}
				alt=""
				style={{ width: 650, margin: "auto" }}
			/>
			<img
				className="logoBigWhite"
				src={logoBigWhite}
				alt="AG Aesthetic Lashes"
				style={{ width: 450, margin: "auto" }}
			/>
		</div>
	);
}

export default HomeLogo;
