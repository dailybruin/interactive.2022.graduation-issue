import React from 'react';
import styled from 'styled-components';

import leftBorder from '../images/leftBorder.svg';
import rightBorder from '../images/rightBorder.svg';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute -webkit-sticky;
    top: 0;
    width: 90px;
    height: 50vh;
    overflow: visible;
`


export default function Border(props) {
    return (
        <Container>
            <img src = {leftBorder} />
            <img src= {rightBorder} />
        </Container>
    )
}