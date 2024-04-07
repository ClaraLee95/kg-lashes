import React from "react";
import "./SectionHeader.scss";
import Line from "../../components/Line/Line";

function SectionHeader({ header, theme }: { header: string; theme: string }) {
	return (
		<div className="sectionHeaderContainer">
			<div className={"sectionHeader fontHeader " + theme}>{header}</div>
			<Line direction="horizontal" theme={theme}></Line>
		</div>
	);
}

export default SectionHeader;
