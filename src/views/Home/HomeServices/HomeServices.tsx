import "./HomeServices.scss";
import HomeCard from "../../../components/Card/HomeCard/HomeCard";
import service from "../../../assets/home_services_example.jpg";

function HomeServices() {
	const servicesHeader = "Was Biete Ich",
		servicesText =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

	return (
		<div className="homeServicesContainer">
			<HomeCard
				image={{
					src: service,
					alt: "Services",
					location: "right",
				}}
				content={{
					header: servicesHeader,
					text: servicesText,
					button: { theme: "light", text: "Mehr" },
					extra: null,
				}}
				nav="was-biete-ich"
				settings={{
					extraPlaced: false,
					headerPlaced: true,
					buttonPlaced: true,
				}}></HomeCard>
		</div>
	);
}

export default HomeServices;
