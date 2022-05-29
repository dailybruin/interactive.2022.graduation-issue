import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';

import leavesBorder2 from '../images/leavesBorder2.svg';
import butterfly from '../images/butterfly1.svg';

const Outer = styled.div `
    width: 100vw;
    height: 100vh;
    margin-bottom: 20%;
    /* background-image: url(${leavesBorder2});
    background-repeat: no-repeat;
    background-position: bottom -30% left 2%;
    z-index: 12; */
`

const Container = styled.div`
    position: relative;
    margin: auto;
    width: 80%;
    height: fit-content;
    block-size: fit-content;
    border: 15px solid rgba(255, 255, 255, 0.5);
    font-family: 'Courier Prime', monospace;

    ${mediaQueries.mobile} {
        width: 90%;
    }
`

const Header = styled.div`
    position: static;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 45px;
    line-height: 51px;
    text-shadow: 0px 4px 4px rgba(82, 79, 64, 0.15);
    color: #785887;
    padding-top: 130px;
    padding-bottom: 40px;
`

const Content = styled.div`
    position: static;
    margin: auto;
    width: 70%;
    font-weight: 400;
    font-size: 32px;
    line-height: 36px;
    text-align: justify;
    margin-bottom: 135px;
`

const BottomBorder = styled.img`
    position: absolute;
    bottom: -19%;
    left: -12%;
`

const Butterfly = styled.img`
    position: absolute; 
    transform: rotate(-12.57deg);
    width: 314px;
    height: 314px;
    bottom: -20%;
    right: -10%;
`

export default function About(props)
{
    return (
        <Outer>
            <Container>
                <Header>About</Header>
                <Content>{props.about}</Content>
                <BottomBorder src = {leavesBorder2} />
                <Butterfly src = {butterfly} />
            </Container>
        </Outer>
    )
}