import React from "react";

import Card from "../Card";

const defaultStyle = {
	display: "block",
	height: "100%",
	width: "100%"
};

const VideoCard = ({ style, children, sources }) => (
	<Card>
		<video controls style={Object.assign({}, defaultStyle, style)}>
			{Array.isArray(sources) ? (
				sources.map(source => <source src={source} />)
			) : (
				<source src={sources} />
			)}
			{children}
		</video>
	</Card>
);

export default VideoCard;
