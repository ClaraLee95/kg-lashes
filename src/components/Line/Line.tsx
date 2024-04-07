import React from "react";
import "./Line.scss";

function Line({ theme }: { theme: string }) {
	return (
		<div className="lineContainer">
			<div className={"line " + theme}></div>
		</div>
	);
}

export default Line;
