import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Popup from "../../components/Popup";
import logoBig from "../../assets/logo_big_black_no_shadow.avif";

import "./index.scss";

function Contact() {
	// utils
	const cookieAccepted = useSelector(
		(state: any) => state.cookie.cookieAccepted
	);

	// local state
	const [isPopupVisible, setPopupIsVisible] = useState(false);
	const popupBody = (
		<div style={{ padding: "2rem", fontSize: "1rem" }}>
			Bestimmte Inhalte von Drittanbietern werden nur angezeigt, wenn die
			entsprechende Option aktiviert ist. Die Datenverarbeitung kann dann auch
			in einem Drittland erfolgen.
			<br /> <br />
			Derzeit haben Sie unsere Cookie-Nutzungseinstellungen nicht akzeptiert.
			Wenn Sie auf den Link zugreifen und zu unserem Instagram-Konto
			weitergeleitet werden möchten, klicken Sie bitte auf "Akzeptieren" in
			unserem Cookie-Banner unten.
			<br /> <br />
			Weitere Informationen hierzu in der{" "}
			<NavLink to="/datenschutz" style={{ color: "white" }}>
				Datenschutzerklärung
			</NavLink>
			.
		</div>
	);

	const handleOpenPopup = () => {
		setPopupIsVisible(true);
	};

	const handleClosePopup = () => {
		setPopupIsVisible(false);
	};

	return (
		<div>
			<div className="backgroundContainer">
				<div className="infoContainer">
					<div className="logoBigContainer">
						<img className="logo" src={logoBig} alt="KG Aesthetic Lashes" />
					</div>
					<div className="verticalLineContainer">
						<div className="verticalLine"></div>
					</div>
					<div className="contactContainer">
						<div className="underConstructionText">
							Bitte kontaktiere mich über:
						</div>
						<div className="listContainer">
							<a
								className="contactItem"
								href="tel:+4901631320591"
								target="_blank"
								rel="noopener noreferrer">
								<div className="contactIcon">
									<FaPhone />
								</div>
								<div className="contactText">0163 1320591</div>
							</a>
							{cookieAccepted ? (
								<a
									className="contactItem"
									href="https://www.instagram.com/kg.aestheticlashes/"
									target="_blank"
									rel="noopener noreferrer">
									<div className="contactIcon">
										<FaInstagramSquare />
									</div>
									<div className="contactText">kg.aestheticlashes</div>
								</a>
							) : (
								<div className="contactItem" onClick={handleOpenPopup}>
									<div className="contactIcon">
										<FaInstagramSquare />
									</div>
									<div className="contactText">kg.aestheticlashes</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="contactPopup">
				<Popup
					isPopupVisible={isPopupVisible}
					closePopup={handleClosePopup}
					header="Cookie-Einstellungen"
					content={popupBody}></Popup>
			</div>
		</div>
	);
}

export default Contact;
