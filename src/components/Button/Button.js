import React from "react";
import "./Button.scss";

function Button(props) {
	return <div className={"buttonCustom " + props.theme}>{props.text}</div>;
}

export default Button;
