import React from "react";
import NavBar from "./components/NavBar/Navbar";
import UnderConstruction from "./views/UnderConstruction/UnderConstruction";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import CookieConsent from "react-cookie-consent";

const App = () => {
	// Cookie for later
	// <CookieConsent
	// 	location="bottom"
	// 	buttonText="I agree"
	// 	cookieName="myAppCookieConsent"
	// 	style={{ background: "#2B373B" }}
	// 	buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
	// 	expires={150}>
	// 	This website uses cookies to enhance the user experience.
	// </CookieConsent>;
	return (
		<div>
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
			<UnderConstruction></UnderConstruction>
		</div>
	);
};

export default App;
