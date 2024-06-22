import { NavLink } from "react-router-dom";

import "./index.scss";

function FullNavMenu() {
	return (
		<>
			<NavLink to="/" style={{ textDecoration: "none" }}>
				Home
			</NavLink>
			<NavLink to="uber-mich" style={{ textDecoration: "none" }}>
				Über Mich
			</NavLink>
			<NavLink to="was-biete-ich" style={{ textDecoration: "none" }}>
				Was Biete Ich
			</NavLink>
			<NavLink to="preisliste" style={{ textDecoration: "none" }}>
				Preisliste
			</NavLink>
			<NavLink to="faqs" style={{ textDecoration: "none" }}>
				FAQs
			</NavLink>
			<NavLink to="galerie" style={{ textDecoration: "none" }}>
				Galerie
			</NavLink>
			<NavLink to="kontakt" style={{ textDecoration: "none" }}>
				Kontakt
			</NavLink>
		</>
	);
}

export default FullNavMenu;
