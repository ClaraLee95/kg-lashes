import Accordion from "react-bootstrap/Accordion";

import "./FAQs.scss";

function FAQs() {
	return (
		<div className="faqContainer">
			<div className="faqHeaderContainer backgroundDark">
				<div className="faqHeader fontHeaderBig fontLight">FAQs</div>
			</div>
			<div className="faqContentContainer fontText">
				<Accordion alwaysOpen>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Accordion Item #1</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Accordion Item #2</Accordion.Header>
						<Accordion.Body>
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>Accordion Item #2</Accordion.Header>
						<Accordion.Body>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
							officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		</div>
	);
}

export default FAQs;
