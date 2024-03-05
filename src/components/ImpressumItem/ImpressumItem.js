import React from "react";
import "./ImpressumItem.scss";

function ImpressumItem({ item }) {
	const renderContents = item.contents.map((content) => {
		return (
			<div className={"impressumContents" + item.class + "Container"}>
				<div
					className={content.name === "" ? null : "impressumItemContentName"}>
					{content.name}
				</div>
				<div className="impressumItemContentText">{content.text}</div>
			</div>
		);
	});
	return (
		<div className="impressumItemContainer">
			<div className="impressumItemHeader">{item.header}</div>
			<div>{renderContents}</div>
		</div>
	);
}

export default ImpressumItem;
