import { useSelector, useDispatch } from "react-redux";
import { acceptCookie, declineCookie } from "../../utils/cookie/cookieSlice";
import { FaPhone } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import logoBig from "../../assets/logo_big_black_no_shadow.png";
import image from "../../assets/background.jpg";

import "./index.scss";

function Contact() {
	// utils
	const cookieAccepted = useSelector(
		(state: any) => state.cookie.cookieAccepted
	);

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
							<div className="contactItem">
								<div className="contactIcon">
									<FaPhone />
								</div>
								<div className="contactText">
									<a
										href="tel:+4901631320591"
										target="_blank"
										rel="noopener noreferrer">
										0163 1320591
									</a>
								</div>
							</div>
							<div className="contactItem">
								<div className="contactIcon">
									<FaInstagramSquare />
								</div>
								<div className="contactText">
									<a
										href="https://www.instagram.com/kg.aestheticlashes/"
										target="_blank"
										rel="noopener noreferrer">
										kg.aestheticlashes
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
