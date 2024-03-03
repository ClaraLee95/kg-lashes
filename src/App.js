import React from "react";
import NavBar from "./components/NavBar/Navbar";
import UnderConstruction from "./views/UnderConstruction/UnderConstruction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<Router>
			<div className="pageContainer">
				<NavBar />
				<div className="contentContainer">
					<Routes>
						<Route
							path="under_construction"
							element={<UnderConstruction></UnderConstruction>}></Route>
						<Route path="uber_mich"></Route>
						<Route path="was_biete_ich"></Route>
						<Route path="preisliste"></Route>
						<Route path="gallerie"></Route>
						<Route path="faqs"></Route>
						<Route path="kontakt"></Route>
						<Route path="datenschutz"></Route>
					</Routes>
				</div>
				<Footer></Footer>
			</div>
		</Router>
	);
};

export default App;
