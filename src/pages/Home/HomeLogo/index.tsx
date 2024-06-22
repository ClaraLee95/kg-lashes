import logoBigWhite from "../../../assets/logo_big_white_no_shadow.png";
import blob from "../../../assets/background_blob.gif";

import "./index.scss";

function HomeLogo() {
	return (
		<div className="homeLogoContainer">
			<img className="blob" src={blob} alt="" />
			<img
				className="logoBigWhite"
				src={logoBigWhite}
				alt="AG Aesthetic Lashes"
			/>
		</div>
	);
}

export default HomeLogo;
