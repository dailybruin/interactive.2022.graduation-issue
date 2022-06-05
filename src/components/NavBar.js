import React from 'react';
import styled from 'styled-components';

import { HashLink } from 'react-router-hash-link';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 50px auto auto 3%;
    align-items: center;
    background-color: #D0D5BF;
    width: fit-content;
`

const Page = styled.div`
    font-family: 'Macondo';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #795663;
    text-align: center;
    text-transform: uppercase;
    border: 1px solid #785887;
    box-sizing: border-box;
    padding: 2px 10px;
`


export default function NavBar(props)
{
    return (
        <Container>
            <Page>Letter</Page>
            <Page>Timeline</Page>
            <Page>News</Page>
            <Page>Sports</Page>
            <Page>Arts</Page>
            <Page>Opinions</Page>
            <Page>The Quad</Page>
            <Page>Multimedia</Page>
            <Page>Prime</Page>
            <Page>-30-</Page>
            <Page>About</Page>
        </Container>
    )
}