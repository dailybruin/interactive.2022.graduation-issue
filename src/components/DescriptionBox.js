import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';

const Container = styled.div`
    margin: 0 auto 5% auto;
    width: 75%;
    height: fit-content;
    font-family: "Courier Prime", monospace;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    background-color: #D0D5BF;
    padding: 30px;
    box-sizing: border-box;

  ${mediaQueries.mobile} {
    width: 100%;
  }
`;


export default function DescriptionBox(props) {
    return (
        <Container>
            Back in the day, newspaper publications would send their pieces via telegraph. To signify the end of a telegram, publications would use character sequences such as "-30-." Those times have changed, but student publications like the Daily Bruin continue to provide for their campuses and serve as a place for students to call home. Read these graduating staffers' personal columns, where they share their final messages before leaving The Bruin.
        </Container>
    )
}