import React, { useState, useEffect } from "react";
import { IoFingerPrint } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import "./CookieConsentBanner.scss";
import { NavLink } from "react-router-dom";

const CookieConsentBanner: React.FC = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [isMinimized, setIsMinimized] = useState(false);
	const [showBadge, setShowBadge] = useState(false);
	const [timeOutId, setTimeOutId] = useState(Array<number>);
	const [setting, setSetting] = useState("");

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
		handleShowBadge(true);
		setSetting("Accepted");
	};

	const handleDecline = () => {
		setIsVisible(false);
		handleShowBadge(true);
		setSetting("Declined");
	};

	const handleClose = () => {
		setIsVisible(false);
		handleShowBadge(false);
	};

	const handleExpand = () => {
		setIsVisible(true);
		timeOutId.forEach((id) => {
			clearTimeout(id);
		});
	};

	return (
		<div>
			<div
				className={`fontLight cookieBannerFull ${!isVisible ? "fadeOut" : ""} ${
					isMinimized ? "minimized" : ""
				}`}>
				{!isMinimized && (
					<>
						<span className="fingerprintIcon">
							<IoFingerPrint />
						</span>
						<div className="cookieContent">
							<span>
								Our website does not use cookies. However, we have links that
								redirects you to Instagram, which may use cookies or similar
								technologies.
								<NavLink
									to="/datenschutz"
									style={{ paddingLeft: "1rem", color: "white" }}>
									Learn more
								</NavLink>
							</span>
							<div className="cookieButtons">
								<button className="cookieDecline" onClick={handleDecline}>
									Decline
								</button>
								<button className="cookieAccept" onClick={handleAccept}>
									Accept
								</button>
								<span className="closeIcon" onClick={handleClose}>
									<IoMdClose />
								</span>
							</div>
						</div>
					</>
				)}
			</div>
			{isMinimized && (
				<div className="minimizedContainer">
					<span className="fingerprintIcon minimized" onClick={handleExpand}>
						<IoFingerPrint />
					</span>
					{showBadge && (
						<span className="badge fadeInOut">Setting Saved: {setting}</span>
					)}
				</div>
			)}
		</div>
	);
};

export default CookieConsentBanner;