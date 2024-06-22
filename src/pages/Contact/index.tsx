import image from "../../assets/background.jpg";

import "./index.scss";

function Contact() {
	return (
		<div>
			<h1>Contact</h1>
			<img
				className=""
				src={image}
				alt=""
				style={{ width: 1200, margin: "auto" }}
			/>
		</div>
	);
}

export default Contact;
