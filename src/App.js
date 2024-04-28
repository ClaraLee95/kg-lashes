import React from "react";
import NavBar from "./components/NavBar/Navbar";
import UnderConstruction from "./views/UnderConstruction/UnderConstruction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Impressum from "./views/Impressum/Impressum";
import Datenschutz from "./views/Datenschutz/Datenschutz";

const App = () => {
	return (
		<Router>
			<div className="pageContainer">
				<NavBar />
				<div className="contentContainer">
					<Routes>
						<Route
							path="/"
							element={<UnderConstruction></UnderConstruction>}></Route>
						<Route path="impressum" element={<Impressum></Impressum>}></Route>
						<Route
							path="datenschutz"
							element={<Datenschutz></Datenschutz>}></Route>
					</Routes>
				</div>
				<Footer></Footer>
			</div>
		</Router>
	);
};

export default App;
