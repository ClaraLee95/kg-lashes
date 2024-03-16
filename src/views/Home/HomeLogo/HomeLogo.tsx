import React from "react";
import logoBigWhite from "@/assets/logo_big_white.png";
import blob from "@/assets/background_blob.gif";
import "./HomeLogo.scss";

function HomeLogo() {
	return (
		<>
			<div className="logoBigWhiteContainer">
				<img
					className="blob"
					src={blob}
					alt=""
					style={{ width: 500, margin: "auto" }}
				/>
				<img
					className="logoBigWhite"
					src={logoBigWhite}
					alt="AG Aesthetic Lashes"
					style={{ width: 350, margin: "auto" }}
				/>
			</div>
		</>
	);
}

export default HomeLogo;
