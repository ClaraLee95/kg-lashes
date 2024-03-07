import React from "react";
import logoBigWhite from "../../assets/logo_big_white.png";
import blobl from "../../assets/background_blob.gif";

import "./Home.scss";

function Home() {
	return (
		<div className="container">
			<div className="logoBigWhiteContainer">
				<img className="blob" src={blobl} alt="" />
				<img
					className="logoBigWhite"
					src={logoBigWhite}
					alt="AG Aesthetic Lashes"
					style={{ width: 500, margin: "auto" }}
				/>
			</div>
		</div>
	);
}

export default Home;
