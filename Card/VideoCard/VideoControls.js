import React from "react";
import styled from "styled-components";

import PlayPauseButton from "./PlayPauseButton";

const Container = styled.div`
	height: 10%;
	width: 100%;
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), transparent);

	& > button {
		width: 10%;
		height: 100%;
	}
`;

const VideoControls = ({}) => (
	<Container>
		<PlayPauseButton />

		{/* play/pause */}
		{/* volume */}
		{/* slider */}
	</Container>
);

export default VideoControls;
