import React from "react";
import "./SectionHeader.scss";
import Line from "../../components/Line/Line";
import { type SectionHeaderProps } from "../../lib/types";

function SectionHeader({
	header,
	theme,
	direction,
	extra,
}: SectionHeaderProps) {
	const extraLineBeforeText =
		direction === "middle" ? (
			<>
				<Line direction="horizontal" theme={theme}></Line>
			</>
		) : (
			<></>
		);
	const reverseOrNot = direction === "right" ? "reverseFlex" : "normalFlex";
	let render = (
		<>
			{extraLineBeforeText}
			<div
				className={`sectionHeader fontHeader ${theme} ${direction} ${extra!}`}>
				{header}
			</div>
			<Line direction="horizontal" theme={theme}></Line>
		</>
	);

	return (
		<div className={`sectionHeaderContainer ${reverseOrNot}`}>{render}</div>
	);
}

export default SectionHeader;
