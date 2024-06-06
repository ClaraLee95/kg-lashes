import "./Button.scss";
import { type ButtonType } from "../../lib/types";

function Button({ theme, text }: ButtonType) {
	return <div className={"buttonCustom " + theme}>{text}</div>;
}

export default Button;
