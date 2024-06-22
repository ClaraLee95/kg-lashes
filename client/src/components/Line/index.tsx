import { type LineType } from "../../lib/types";

import "./index.scss";

function Line({ direction, theme }: LineType) {
	return (
		<div className={"lineContainer " + direction}>
			<div className={"line " + direction + " " + theme}></div>
		</div>
	);
}

export default Line;
