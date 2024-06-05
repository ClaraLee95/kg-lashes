import aboutMe1 from "../../assets/about_me_example1.webp";
import aboutMe2 from "../../assets/about_me_example2.webp";
import aboutMeLogo from "../../assets/logo_big_black_no_shadow.png";

import "./AboutMe.scss";
import HomeCard from "../../components/Card/HomeCard/HomeCard";

function AboutMe() {
	const aboutMeText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";

	return (
		<div className="aboutMeContainer">
			<div className="aboutMeHeaderContainer">
				<img
					className="aboutMeHeaderLogo"
					src={aboutMeLogo}
					alt="KG Aesthetic Lashes Logo"
				/>
				<img src={aboutMe1} alt="Profile" loading="lazy" decoding="async" />
			</div>
			<div className="aboutMeContentContainer">
				<HomeCard
					image={{
						src: aboutMe2,
						alt: "Katharina Gleixner",
						location: "left",
					}}
					content={{
						text: aboutMeText,
					}}
					settings={{
						extraPlaced: false,
						headerPlaced: false,
						buttonPlaced: false,
					}}></HomeCard>
			</div>
		</div>
	);
}

export default AboutMe;
