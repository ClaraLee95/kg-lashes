import HomeCard from "../../../components/Card/HomeCard";
import profile from "../../../assets/home_about_me_example.jpg";

import "./index.scss";

function HomeAboutMe() {
	const aboutMeHeader = "Über Mich",
		aboutMeText =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";

	return (
		<div className="homeAboutMeContainer">
			<HomeCard
				image={{
					src: profile,
					alt: "Katharina Gleixner",
					location: "left",
				}}
				content={{
					header: aboutMeHeader,
					text: aboutMeText,
					button: { theme: "light", text: "Mehr" },
				}}
				nav="uber-mich"
				settings={{
					extraPlaced: false,
					headerPlaced: true,
					buttonPlaced: true,
				}}></HomeCard>
		</div>
	);
}

export default HomeAboutMe;
