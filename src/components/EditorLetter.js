import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';

import leavesBorder from '../images/leavesBorder.svg';


const Container = styled.div`
    position: relative;
    margin: auto;
    width: 80%;
    height: fit-content;
    block-size: fit-content;
    border: 15px solid rgba(255, 255, 255, 0.5);
    font-family: 'Courier Prime', monospace;
    padding-bottom: 50px;

    ${mediaQueries.mobile} {
        width: 90%;
    }
`

const Header = styled.div`
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 45px;
    line-height: 51px;
    text-shadow: 0px 4px 4px rgba(82, 79, 64, 0.15);
    color: #785887;
    padding: 30px;
    margin-top: 80px;
`

const Content = styled.div`
    margin: auto;
    width: 70%;
    font-weight: 400;
    font-size: 32px;
    line-height: 36px;
    text-align: justify;
    margin-bottom: 50px;
`

const SignOff = styled.div`
    margin: auto;
    width: 70%;
    font-weight: 400;
    font-size: 32px;
    line-height: 36px;
    text-align: justify;
`

const BottomBorder = styled.img`
    position: absolute;
    top: 32%;
    right: -13%;
`

export default function EditorLetter(props)
{
    return (
        <Container>
            <Header>Letter From the Editors</Header>
            <Content>{props.editor_letter}</Content>
            <SignOff> warmly, </SignOff>
            <SignOff>the editors & co</SignOff>
            <BottomBorder src = {leavesBorder} />
        </Container>
    )
}