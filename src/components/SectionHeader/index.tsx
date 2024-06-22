import Line from "../Line";
import { type SectionHeaderType } from "../../lib/types";

import "./index.scss";

function SectionHeader({ header, theme, direction, extra }: SectionHeaderType) {
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
