import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';


const Image = styled.img`
    display: block;
    width: 303px;
    height: 290px;
    box-sizing: content-box;
    padding: 10px;
    z-index: 12;
    object-fit: cover;
`;

const Title = styled.a`
    display: block;
    font-family: 'Courier Prime', monospace;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    text-align: center;   
    margin-top: 10px;
    text-decoration: none;
    padding-bottom: 20px;
    color: inherit;
`

//TODO: figure out why ByLine color doesn't change unless color: inherit is used
const ByLine = styled.div`
    display: block;
    font-family: 'Courier Prime', monospace;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    text-align: center;
    margin-top: 20px;
    color: inherit;
`

export default function ArticleCard(props)
{
    // getBackground returns hex code for either green or white background depending on value of props.color
    function getBackground (color) {
        if (color == "green") {return '778A59'};
        if (color == "white") {return 'F6F8EA'};
    }
    function getTextColor (color) {
        if (color == "green") {return 'F6F8EA'};
        if (color == "white") {return '524F40'};
    }

    const Container = styled.div`
        width: 323px;
        background-color: #${getBackground(props.color)};
        color: #${getTextColor(props.color)};
        height: fit-content;
        block-size: fit-content;

        margin-left: 20%;

        ${mediaQueries.mobile} {
            width: 90%;
    }
    `

    return (
        <Container>
            <a href={props.article_url}><Image src={props.article_image}/></a>
            <ByLine> By {props.article_byline}</ByLine>
            <Title href={props.article_url}>{props.article_title}</Title>
        </Container>
    )
}