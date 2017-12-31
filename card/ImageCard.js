import React from "react";

import Card from "./Card";

const defaultStyle = {
	display: "block",
	height: "100%",
	width: "100%"
};

const ImageCard = ({ src, style }) => (
	<Card>
		<img src={src} style={Object.assign({}, defaultStyle, style)} />
	</Card>
);

export default ImageCard;
