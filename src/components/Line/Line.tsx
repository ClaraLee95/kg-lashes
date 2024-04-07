import React from "react";
import "./Line.scss";
import { LineProps } from "../../lib/types";

function Line({ direction, theme }: LineProps) {
	return (
		<div className={"lineContainer " + direction}>
			<div className={"line " + direction + " " + theme}></div>
		</div>
	);
}

export default Line;
