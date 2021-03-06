import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

import leavesBorder from "../images/leavesBorder.svg";
import outlineButterfly from "../images/outlineButterfly.svg";

const Container = styled.div`
  position: relative;
  margin: 12% auto 10% auto;
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
  padding: 10% 10%;
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
  ${mediaQueries.mobile} {
    font-size: 20px;
  }
`;

const Content = styled.div`
  margin: auto;
  font-weight: 400;
  font-size: 32px;
  line-height: 36px;
  text-align: justify;
  ${mediaQueries.mobile} {
    font-size: 15px;
  }
`;

const BottomBorder = styled.img`
  position: absolute;
  bottom: -4.5%;
  right: -13%;
  ${mediaQueries.mobile} {
    display: none;
  }
`;

const Butterfly1 = styled.img`
  position: absolute;
  left: -150px;
  top: -190px;
  ${mediaQueries.mobile} {
    display: none;
  }
`;

const Butterfly2 = styled.img`
  position: absolute;
  transform: matrix(-1.08, -0.55, -0.5, 0.77, 0, 0);
  left: -50px;
  top: -55px;
  ${mediaQueries.mobile} {
    display: none;
  }
`;

const Butterfly3 = styled.img`
  position: absolute;
  transform: matrix(0.96, -0.69, 0.52, 0.76, 0, 0);
  left: -190px;
  top: 60px;
  ${mediaQueries.mobile} {
    display: none;
  }
`;

export default function EditorLetter(props) {
  return (
    <Container>
      <Butterfly1 src={outlineButterfly} />
      <Butterfly2 src={outlineButterfly} />
      <Butterfly3 src={outlineButterfly} />
      <Text>
        <Header id="letter-from-the-editors">Letter From the Editors</Header>
        <Content style={{ margin: "auto" }}>
          {props.editor_letter.map((info) => {
            if (info.type == "paragraph") {
              return <p>{info.content}</p>;
            } else if (info.type == "signoff") {
              return <p>{info.content} </p>;
            } else if (info.type == "closing") {
              return <p style={{ "padding-top": "30px" }}>{info.content}</p>;
            }
          })}
        </Content>
      </Text>
      <BottomBorder src={leavesBorder} />
    </Container>
  );
}
