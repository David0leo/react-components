import React from "react";

const defaultStyle = {
	width: "100%",
	height: "100%",
	borderRadius: "0.5em",
	// border: "1px solid rgba(0, 0, 0, 0.15)",
	boxShadow: "0 0 15px 1px rgba(0, 0, 0, 0.25)",
	overflow: "hidden"
};

const Card = ({ style, children }) => (
	<div style={Object.assign({}, defaultStyle, style)}>{children}</div>
);

export default Card;
