import React from "react";
import styled from "styled-components";

const Input = styled.input`
  -webkit-appearance:none;
  height: 100%;
  width: 100%;
`;

const Slider = ({}) => (
  <Input type="range"/>
)

export default Slider;