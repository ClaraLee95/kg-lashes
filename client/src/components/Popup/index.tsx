import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./index.scss";

interface PopupProps {
	isPopupVisible: boolean;
	closePopup: () => void;
	header: string;
	content: JSX.Element;
}

function Popup(props: PopupProps) {
	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
		props.closePopup();
	};

	return (
		<Modal
			data-bs-theme="dark"
			show={props.isPopupVisible}
			onHide={handleClose}
			centered>
			<Modal.Header closeButton>
				<Modal.Title
					className="fontFormal fontLight"
					style={{ color: "white" }}>
					{props.header}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="fontFormal fontLight">{props.content}</Modal.Body>
		</Modal>
	);
}

export default Popup;
