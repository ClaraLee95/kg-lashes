import React from "react";
import NavBar from "./components/NavBar/Navbar";
import UnderConstruction from "./views/UnderConstruction/UnderConstruction";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<div className="pageContainer">
			<BrowserRouter>
				<div className="contentContainer">
					<NavBar />
					<UnderConstruction></UnderConstruction>
				</div>
				<Footer></Footer>
			</BrowserRouter>
		</div>
	);
};

export default App;
