import React from 'react';
import styled from 'styled-components';

import upLeaf from '../images/upLeaf.svg';
import caterpillar from '../images/caterpillar.svg';
import cocoon from '../images/cocoon.svg';
import butterfly1 from '../images/butterfly1.svg';
import butterfly2 from '../images/butterfly2.svg';
import downLeaf from '../images/downLeaf.svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: -webkit-sticky;
    top: 0;
    width: 90px;
    height: 50vh;
    overflow: visible;
`

export default function Border(props) {
    return (
        <Container>
            <img src = {upLeaf} />
            <img src= {caterpillar} />
            <img src = {cocoon} />
            <img src = {butterfly1} />
            <img src = {butterfly2} />
            <img src = {downLeaf} />
        </Container>
    )
}