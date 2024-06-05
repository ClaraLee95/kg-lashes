import HomeLogo from "./HomeLogo/HomeLogo";
import HomeAboutMe from "./HomeAboutMe/HomeAboutMe";
import HomeServices from "./HomeServices/HomeServices";
import HomeFAQs from "./HomeFAQs/HomeFAQs";
import HomeGallery from "./HomeGallery/HomeGallery";

import "./Home.scss";

function Home() {
	return (
		<div className="homeContainer">
			<HomeLogo></HomeLogo>
			<HomeAboutMe></HomeAboutMe>
			<HomeServices></HomeServices>
			<HomeFAQs></HomeFAQs>
			<HomeGallery></HomeGallery>
		</div>
	);
}

export default Home;
