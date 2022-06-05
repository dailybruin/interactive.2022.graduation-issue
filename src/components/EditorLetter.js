import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

import leavesBorder from "../images/leavesBorder.svg";
import outlineButterfly from "../images/outlineButterfly.svg";

const Container = styled.div`
  position: relative;
  margin: 20% auto 10% auto;
  width: 75%;
  height: fit-content;
  block-size: fit-content;
  border: 15px solid rgba(255, 255, 255, 0.5);
  font-family: "Courier Prime", monospace;

  ${mediaQueries.mobile} {
    width: 90%;
  }
`;

const Text = styled.div`
  padding: 10% 13%;
`;

const Header = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 45px;
  line-height: 51px;
  text-shadow: 0px 4px 4px rgba(82, 79, 64, 0.15);
  color: #785887;
  padding-bottom: 40px;
`;

const Content = styled.div`
  margin: auto;
  font-weight: 400;
  font-size: 32px;
  line-height: 36px;
  text-align: justify;
  padding-bottom: 50px;
`;

const SignOff = styled.div`
  margin: auto;
  font-weight: 400;
  font-size: 32px;
  line-height: 36px;
  text-align: justify;
`;

const BottomBorder = styled.img`
  position: absolute;
  bottom: -16%;
  right: -13%;
`;

const Butterfly1 = styled.img`
  position: absolute;
  left: -150px;
  top: -190px;
`;

const Butterfly2 = styled.img`
  position: absolute;
  transform: matrix(-1.08, -0.55, -0.5, 0.77, 0, 0);
  left: -50px;
  top: -55px;
`;

const Butterfly3 = styled.img`
  position: absolute;
  transform: matrix(0.96, -0.69, 0.52, 0.76, 0, 0);
  left: -190px;
  top: 60px;
`;

export default function EditorLetter(props) {
  return (
    <Container>
      <Butterfly1 src={outlineButterfly} />
      <Butterfly2 src={outlineButterfly} />
      <Butterfly3 src={outlineButterfly} />
      <Text>
        <Header id="letter-from-the-editors">Letter From the Editors</Header>
        <Content>{props.editor_letter}</Content>
        <SignOff> warmly, </SignOff>
        <SignOff>the editors & co</SignOff>
      </Text>
      <BottomBorder src={leavesBorder} />
    </Container>
  );
}
