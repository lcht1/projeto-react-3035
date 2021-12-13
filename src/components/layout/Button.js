import React from "react";

import "./Button.css";

const Button = (props) => {
	return (
		<div>
		<button onClick={props.onClick} className={`button ${props.className}`}>
			{props.children}
		</button>
		</div>
	);
};

export default Button;