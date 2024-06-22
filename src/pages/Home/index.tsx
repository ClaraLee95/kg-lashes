import HomeLogo from "./HomeLogo";
import HomeAboutMe from "./HomeAboutMe";
import HomeServices from "./HomeServices";
import HomeFAQs from "./HomeFAQs";
import HomeGallery from "./HomeGallery";

import "./index.scss";

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
