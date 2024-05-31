import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import AboutMe from "./views/AboutMe/AboutMe";
import Services from "./views/Services/Services";
import PriceList from "./views/PriceList/PriceList";
import FAQs from "./views/FAQs/FAQs";
import Gallery from "./views/Gallery/Gallery";
import Contact from "./views/Contact/Contact";
import DataProtection from "./views/DataProtection/DataProtection";
import Impressum from "./views/Impressum/Impressum";
import { Theme } from "./lib/types";

const App = () => {
	const location = useLocation();
	const [previousLocation, setPreviousLocation] = useState("");
	const [currentLocation, setCurrentLocation] = useState("/");
	let bodyClass = "backgroundLight fontDark",
		theme = "light" as Theme,
		lineColor = "dark" as Theme;

	if (
		location.pathname === "/was-biete-ich" ||
		location.pathname === "/galerie"
	) {
		bodyClass = "backgroundDark fontLight";
		theme = "dark";
		lineColor = "light";
	} else {
		bodyClass = "backgroundLight fontDark";
		theme = "light";
		lineColor = "dark";
	}

	useEffect(() => {
		setCurrentLocation(location.pathname);
		if (currentLocation !== previousLocation) {
			window.scrollTo(0, 0);
			setPreviousLocation(currentLocation);
		}
	}, [location, previousLocation, currentLocation]);

	return (
		<div className={"pageContainer " + bodyClass}>
			<NavBar className="fontMenu" theme={theme} />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home></Home>}></Route>
					<Route path="uber-mich" element={<AboutMe></AboutMe>}></Route>
					<Route path="was-biete-ich" element={<Services></Services>}></Route>
					<Route path="preisliste" element={<PriceList></PriceList>}></Route>
					<Route path="faqs" element={<FAQs></FAQs>}></Route>
					<Route path="galerie" element={<Gallery></Gallery>}></Route>
					<Route path="kontakt" element={<Contact></Contact>}></Route>
					<Route
						path="datenschutz"
						element={<DataProtection></DataProtection>}></Route>
					<Route path="impressum" element={<Impressum></Impressum>}></Route>
				</Routes>
			</div>
			<Footer className="fontFooter" theme={lineColor}></Footer>
		</div>
	);
};

export default App;
