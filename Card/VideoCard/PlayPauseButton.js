import React from "react";
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 100%;

`

const Img = styled.img`
  width: 100%;
  height: 100%;

`

class PlayPauseButton extends React.Component {
  state = {
    play: true
  }

  onClick = () => {
    this.setState((prevState, props) => ({
      play: !prevState.play
    }))
    this.props.onClick();
  }

  render() {
    return (
      <Button onClick={this.onClick}>
        <Img src={require(this.state.play ? './images/play.svg' : './images/pause.svg')}/>
      </Button>
    )
  }
}

export default PlayPauseButton;