import React from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";

const SliderWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

const ProgressBar = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	background: rgba(0, 0, 0, 0.2);
`;

const Handle = styled.div`
	width: 5%;
	height: 100%;
	position: absolute;
	background: red;
  border-radius: 100%/50%;
	transform: translateX(${props=>props.translateX}px);
`;

class Slider extends React.Component {
	state = {
		mouseDown: false,
    positionX: 0,
    baseX: null,
	};

	handleMouseMove = event => {
		if (this.state.mouseDown) {
      const positionX = event.pageX
      let baseX = this.state.baseX || positionX;

			this.setState({positionX, baseX})
		}
	};

	handleMouseDown = (event) => {
		this.setState((prevState, props) => ({
      mouseDown: true
		}));
	};

	handleMouseUp = () => {
		this.setState((prevState, props) => ({
			mouseDown: false
		}));
  };
  
  getTranslateX = () => {
    let { positionX, baseX } = this.state
    baseX = baseX || 0;

    return positionX - baseX
  }

  //instead have mouse actions on the progress bar. That way you can click it for moving the handle
	render() {
		return (
			<SliderWrapper>
				<ProgressBar type="range" />
				<Handle
          id="__slider-handle__"
					onMouseMove={event => this.handleMouseMove(event)}
					onMouseDown={event => this.handleMouseDown(event)}
					onMouseUp={this.handleMouseUp}
					onMouseLeave={this.handleMouseUp}
          translateX={this.getTranslateX()}
				/>
			</SliderWrapper>
		);
	}
}

export default Slider;
