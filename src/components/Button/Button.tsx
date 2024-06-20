import "./Button.scss";
import { type ButtonType } from "../../lib/types";

function Button({ theme, text, switchTheme }: ButtonType) {
	return <div className={`buttonCustom ${theme} ${switchTheme}`}>{text}</div>;
}

export default Button;
