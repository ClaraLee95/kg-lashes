import React from "react";
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

const App = () => {
	let bodyClass = "backgroundLight fontDark";
	const location = useLocation().pathname;
	console.log(location);
	if (location === "/was-biete-ich" || location === "/galerie") {
		bodyClass = " backgroundDark fontLight";
	}
	return (
		<div className={"pageContainer " + bodyClass}>
			<NavBar className="fontMenu" />
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
			<Footer className="fontFooter"></Footer>
		</div>
	);
};

export default App;
