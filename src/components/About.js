import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

import leavesBorder2 from "../images/leavesBorder2.svg";
import butterfly from "../images/butterfly1.svg";

const Container = styled.div`
  position: relative;
  margin: 5% auto 10% auto;
  width: 75%;
  height: fit-content;
  border: 15px solid rgba(255, 255, 255, 0.5);
  font-family: "Courier Prime", monospace;

  /* scroll-behavior: smooth;
  overflow-y: scroll;
  max-height: 765px; */

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
`;

const Content = styled.div`
  margin: auto;
  font-weight: 400;
  font-size: 32px;
  line-height: 36px;
  text-align: justify;
`;

const BottomBorder = styled.img`
  position: absolute;
  bottom: -1.5%;
  left: -12%;
`;

const ButterflyBottom = styled.img`
  position: absolute;
  transform: rotate(-12.57deg);
  width: 314px;
  height: 314px;
  bottom: -1.5%;
  right: -12%;
`;

const ButterflyTop = styled.img`
  position: absolute;
  transform: rotate(7.26deg);
  width: 208px;
  height: 196px;
  top: 30px;
  left: -2%;

  ${mediaQueries.mobile} {
    top: -2%;
    left: -8%;
    width: 2%;
    height: 2%;
  }
`;


export default function About(props) {
  return (
    <Container>
      <Text>
        <Header id="about">About</Header>
        <Content>
          {props.about.map((info) => {
            if (info.type == 'paragraph'){
              return ( <p>{info.content}</p> )
            }
            else if (info.type == 'Name_Position') {
              return (<p style={{"text-align":"left"}}>{info.content} </p>)
            }
            else if (info.type == 'Section_header') {
              return (<p style={{"font-weight":"bold", "padding-top": "30px"}}>{info.content} </p>)
            }
          })}
        </Content>
        <ButterflyTop src={butterfly} />
      </Text>
      <BottomBorder src={leavesBorder2} />
      <ButterflyBottom src={butterfly} />
    </Container>
  );
}
