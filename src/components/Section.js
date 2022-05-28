import React from "react";
import styled from "styled-components";
import { colors } from "../shared/config";

const Section = styled("div")`
  z-index: 2001;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: ${(props) => props.background};
  width: 100%;
  height: ${(props) => props.height};
  padding: 0.2em 0;
  color: white;
  font-family: "ITC Century";
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 21.6px;
  /* border-bottom: 2px solid black; */
`;

const SectionComponent = ({ background, height }) => {
  return <Section background={background} height={height}></Section>;
};

export default SectionComponent;
