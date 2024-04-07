import React from "react";
import "./HomeServices.scss";
import Card from "../../../components/Card/Card";
import service from "../../../assets/home_services_example.jpg";
import Button from "../../../components/Button/Button";

function HomeServices() {
	const button = <Button theme="light" text="Mehr"></Button>;
	const servicesHeader = "Was Biete Ich",
		servicesText =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

	return (
		<div className="homeServicesContainer">
			<Card
				image={{
					src: service,
					alt: "Services",
					location: "right",
				}}
				content={{
					header: servicesHeader,
					text: servicesText,
					button: button,
					extra: null,
				}}></Card>
		</div>
	);
}

export default HomeServices;
