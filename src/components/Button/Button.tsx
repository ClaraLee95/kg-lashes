import "./Button.scss";
import { type ButtonProps } from "../../lib/types";

function Button({ theme, text }: ButtonProps) {
	return <div className={"buttonCustom " + theme}>{text}</div>;
}

export default Button;
