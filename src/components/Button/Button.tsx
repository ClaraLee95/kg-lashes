import "./Button.scss";

type ButtonProps = {
	theme: string;
	text: string;
};

function Button({ theme, text }: ButtonProps) {
	return <div className={"buttonCustom " + theme}>{text}</div>;
}

export default Button;
