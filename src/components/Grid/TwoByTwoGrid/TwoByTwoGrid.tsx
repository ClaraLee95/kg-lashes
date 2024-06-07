import { type TwoByTwoGridType } from "../../../lib/types";
import { type ImageType } from "../../../lib/types";
import "./TwoByTwoGrid.scss";

function TwoByTwoGrid({
	leftTop,
	rightTop,
	leftBottom,
	rightBottom,
}: TwoByTwoGridType) {
	return (
		<div className="twoByTwoContainer">
			<div className="leftTop">
				<img
					src={(leftTop as ImageType).src}
					alt={(leftTop as ImageType).alt}
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div className="rightTop">
				<img
					src={(rightTop as ImageType).src}
					alt={(rightTop as ImageType).alt}
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div className="leftBottom">
				<img
					src={(leftBottom as ImageType).src}
					alt={(leftBottom as ImageType).alt}
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div className="rightBottom">
				<img
					src={(rightBottom as ImageType).src}
					alt={(rightBottom as ImageType).alt}
					loading="lazy"
					decoding="async"
				/>
			</div>
		</div>
	);
}

export default TwoByTwoGrid;
