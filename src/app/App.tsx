import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { type ThemeType } from "../lib/types";
import "./App.scss";

// pages
import MenuBar from "../components/Menu/MenuBar";
import Footer from "../components/Footer";
import CookieConsentBanner from "../components/CookieConsentBanner";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import ServiceOfferings from "../pages/ServiceOfferings";
import PriceList from "../pages/PriceList";
import FAQs from "../pages/FAQs";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import DataProtection from "../pages/DataProtection";
import Impressum from "../pages/Impressum";

// utils
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
	const location = useLocation();
	const [previousLocation, setPreviousLocation] = useState("");
	const [currentLocation, setCurrentLocation] = useState("/");

	let bodyClass = "backgroundLight fontDark",
		theme = "light" as ThemeType,
		lineColor = "dark" as ThemeType;

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
		<Provider store={store}>
			<div className={"pageContainer " + bodyClass}>
				<MenuBar className="fontMenu" theme={theme} />
				<div className="container">
					<Routes>
						<Route path="/" element={<Home></Home>}></Route>
						<Route path="uber-mich" element={<AboutMe></AboutMe>}></Route>
						<Route
							path="was-biete-ich"
							element={<ServiceOfferings></ServiceOfferings>}></Route>
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
				<CookieConsentBanner />
			</div>
		</Provider>
	);
};

export default App;
