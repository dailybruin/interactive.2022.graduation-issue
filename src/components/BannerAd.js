import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';

const Container = styled.div`
    margin: auto;
    width: 80%;
    height: 257px;

    ${mediaQueries.mobile} {
        width: 95%;
    }
`

const Image = styled.img`
    height: 100%;
    width: 100%;
`

export default function BannerAd(props)
{
    return (
        <Container>
            <Image src = {props.banner_ad_image} />
        </Container>
    )
}

{/* <ArticleGrid> 
    <BannerAd banner_ad_image = {data.banner_ad_1} /> 
<ArticleGrid /> */}