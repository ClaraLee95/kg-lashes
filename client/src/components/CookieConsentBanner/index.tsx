import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { acceptCookie, declineCookie } from "../../utils/cookie/cookieSlice";
import { IoFingerPrint } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

import "./index.scss";

function CookieConsentBanner() {
	// utils
	const dispatch = useDispatch();

	// local states
	const [isVisible, setIsVisible] = useState(true);
	const [isMinimized, setIsMinimized] = useState(false);
	const [showBadge, setShowBadge] = useState(false);
	const [timeOutId, setTimeOutId] = useState(Array<number>);
	const [setting, setSetting] = useState("");
	const [isChangeMode, setIsChangeMode] = useState(false);

	useEffect(() => {
		if (!isVisible) {
			setTimeout(() => {
				setIsMinimized(true);
			}, 300);
		} else {
			setIsMinimized(false);
		}
	}, [isVisible]);

	const handleShowBadge = (show: boolean) => {
		setShowBadge(show);
		if (show) {
			const id = window.setTimeout(() => {
				setShowBadge(false);
			}, 5000);
			setTimeOutId([...timeOutId, id]);
		}
	};

	const handleAccept = () => {
		setIsVisible(false);
		dispatch(acceptCookie());

		const id = window.setTimeout(() => {
			setSetting("Akzeptiert");
			setIsChangeMode(false);
			handleShowBadge(true);
		}, 500);
		setTimeOutId([...timeOutId, id]);
	};

	const handleDecline = () => {
		setIsVisible(false);
		dispatch(declineCookie());

		const id = window.setTimeout(() => {
			setSetting("Abgelehnt");
			setIsChangeMode(false);
			handleShowBadge(true);
		}, 500);
		setTimeOutId([...timeOutId, id]);
	};

	const handleClose = () => {
		setIsChangeMode(false);
		setIsVisible(false);
		handleShowBadge(false);
	};

	const handleExpand = () => {
		setIsVisible(true);
		timeOutId.forEach((id) => {
			clearTimeout(id);
		});
	};

	const handleChange = () => {
		setIsChangeMode(true);
	};

	return (
		<div>
			<div
				className={`fontLight fontFormal cookieBannerFull ${
					!isVisible ? "fadeOut" : ""
				} ${isMinimized ? "minimized" : ""}`}>
				{!isMinimized && (
					<>
						<span className="fingerprintIcon">
							<IoFingerPrint />
						</span>
						<div className="cookieContent">
							{setting === "" || isChangeMode ? (
								<div className={setting !== "" && isChangeMode ? "fadeIn" : ""}>
									<div className="cookieText">
										Unsere Website verwendet keine Cookies. Wir haben jedoch
										Links, die Sie zu Instagram weiterleiten, wo möglicherweise
										Cookies oder ähnliche Technologien verwendet werden.
										<NavLink
											to="/datenschutz"
											style={{ paddingLeft: "1rem", color: "white" }}>
											Mehr erfahren
										</NavLink>
									</div>
									<div className="cookieButtons">
										<button className="cookieAccept" onClick={handleAccept}>
											Akzeptieren
										</button>
										<button className="cookieDecline" onClick={handleDecline}>
											Ablehnen
										</button>
									</div>
								</div>
							) : (
								<div className={isChangeMode ? "fadeIn" : ""}>
									<div className="cookieTextFlex">
										<span>
											Aktuelle Cookies-Einstellung: <strong>{setting}</strong>
										</span>
									</div>
									<div className="cookieButtons">
										<button className="cookieDecline" onClick={handleChange}>
											Verwalten
										</button>
									</div>
								</div>
							)}
						</div>
						<span className="closeIcon" onClick={handleClose}>
							<IoMdClose />
						</span>
					</>
				)}
			</div>
			{isMinimized && (
				<div className="minimizedContainer">
					<span className="fingerprintIcon minimized" onClick={handleExpand}>
						<IoFingerPrint />
					</span>
					{showBadge && (
						<span className="badge fontFormal fadeInOut">
							Setting Saved: {setting}
						</span>
					)}
				</div>
			)}
		</div>
	);
}

export default CookieConsentBanner;
