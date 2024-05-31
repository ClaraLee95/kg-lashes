import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Theme } from "./lib/types";
import { CookifyConsent } from "react-cookify"; // https://cookify.jersyfi.dev/docs-react/intro/

import NavBar from "./components/NavBar/Navbar";
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

import "./App.scss";
import "./components/Cookify/Cookify.scss";

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
		<CookifyConsent
			settings={{
				options: {
					name: "cookie-consent",
					saveByDefault: false,
					saveWithChange: false,
					types: {
						marketing: false,
						statistics: false,
						performance: false,
					},
					jscookie: {
						expires: 365,
						path: "/",
						secure: true,
					},
					revision: 1,
				},
				consent: {
					theme: "custom",
					icon: "fingerprint",
					reopen: true,
					paused: {
						title: "Consent Manger Notice",
						desc: "The consent manager is paused on this side to read the privacy policy.",
						icon: "ℹ️",
						url: "/datenschutz",
					},
					info: {
						title: "We value your data!",
						desc: (
							<>
								Welcome! To enhance your experience, we use cookies or similar
								technologies, which comply with GDPR. For more information feel
								free to check out our{" "}
								<a
									href="/datenschutz"
									style={{ textDecoration: "underline", fontWeight: 500 }}>
									Datenschutzerklärung
								</a>
								.
							</>
						),
						buttons: [
							{
								action: "manage",
								label: "Manage settings",
								schema: "week",
							},
							{
								action: "all",
								label: "Accept all cookies",
								schema: "strong",
							},
						],
					},
					detail: {
						title: "Manage your consent settings",
						desc: (
							<>
								Although our website does not use cookies, we do have links that
								redirects you to our Instagram account. Instagram may use
								cookies or similar technologies to improve your expereince. You
								can manage your cookie preferences at any time. To learn more
								about our use of cookies, feel free to check out our{" "}
								<a
									href="/datenschutz"
									style={{ textDecoration: "underline", fontWeight: 500 }}>
									Datenschutzerklärung
								</a>
								.
							</>
						),
						reference: {
							desc: "Please provide the below information when you hand in a request about cookies.",
							uuid: "UUID",
							accepted: "Accepted",
							updated: "Updated",
						},
						buttons: [
							{
								action: "necessary",
								label: "Only necessary",
								schema: "week",
							},
							{
								action: "accept",
								label: "Accept selected",
								schema: "week",
							},
							{
								action: "all",
								label: "Accept all",
								schema: "strong",
							},
						],
					},
					table: {
						headers: ["Name", "Domain", "Expiration", "Description"],
						types: [
							// {
							// 	for: "necessary",
							// 	title: "Strict Necessary",
							// 	desc: "Necessary Beschreibung",
							// },
							// {
							// 	for: "marketing",
							// 	title: "Marketing",
							// 	desc: "Marketing Beschreibung",
							// 	body: [
							// 		["cookie1", "url1", "2 years", "lorem"],
							// 		["cookie2", "url2", "1 day", "lorem"],
							// 	],
							// },
							{
								for: "thirdParty",
								title: "Third-party (Instagram)",
								desc: (
									<>
										Instagram enables the embedding of content published on
										instagram.com into websites to enhance the website with
										images. Cookies or cookie-like technologies can be stored
										and read. To learn more about our use of cookies, please see
										our{" "}
										<a
											href="/datenschutz"
											style={{ textDecoration: "underline", fontWeight: 500 }}>
											Datenschutzerklärung
										</a>
										.
									</>
								),
							},
						],
					},
				},
			}}>
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
		</CookifyConsent>
	);
};

export default App;
