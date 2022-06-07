import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

import Card from "./ArticleCard";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 35px;
    column-gap: 35px;
    margin: auto;
    max-width: 100%;
    align-items: start;

    ${mediaQueries.mobile} {
        display: flex;
        flex-direction: column;
        width: 100vw;
        margin: auto;
        align-items: center;
    }
`


export default function ArticleGrid(props) {
    return (
        <Container>
            {props && props.articles ? props.articles.map((item) => {
                if (item.type == 'article') {
                    console.log(props.articles)
                    return(
                        <Card article_title={item.article_title} article_byline={item.article_byline} article_image={item.article_image} article_url={item.article_url} color={item.color}/>
                    )
                }
            }) : null}
        </Container>
    )
}