import React from "react";
import styled from "styled-components";

import Card from "./Card";

const Img = styled.img`
	display: block;
	height: 100%;
	width: 100%;
`;

const ImageCard = ({ src, style }) => (
	<Card>
		<Img src={src} style={Object.assign({}, defaultStyle, style)} />
	</Card>
);

export default ImageCard;
