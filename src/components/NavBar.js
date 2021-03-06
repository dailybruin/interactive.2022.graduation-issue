import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

import { HashLink } from "react-router-hash-link";

const StickyContainer = styled.div`
  padding-top: 50px;
  margin: auto;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  width: fit-content;
  max-width: 90vw;
`;

const Page = styled.div`
  font-family: "Macondo";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #795663;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid #785887;
  background-color: #d0d5bf;
  box-sizing: border-box;
  padding: 2px 10px;
  ${mediaQueries.mobile} {
    font-size: 14px;
  }
`;

export default function NavBar(props) {
  return (
    <StickyContainer>
      <Row>
        <HashLink
          to="#letter-from-the-editors"
          style={{ textDecoration: "none" }}
        >
          <Page>Letter</Page>
        </HashLink>

        <HashLink to="#timeline" style={{ textDecoration: "none" }}>
          <Page> Timeline</Page>
        </HashLink>

        <HashLink to="#news" style={{ textDecoration: "none" }}>
          <Page>News</Page>
        </HashLink>

        <HashLink to="#sports" style={{ textDecoration: "none" }}>
          <Page>Sports</Page>
        </HashLink>

        <HashLink to="#arts" style={{ textDecoration: "none" }}>
          <Page>Arts</Page>
        </HashLink>

        <HashLink to="#opinion" style={{ textDecoration: "none" }}>
          <Page>Opinion</Page>
        </HashLink>

        <HashLink to="#the-quad" style={{ textDecoration: "none" }}>
          <Page>The Quad</Page>
        </HashLink>

        <HashLink to="#multimedia" style={{ textDecoration: "none" }}>
          <Page>Multimedia</Page>
        </HashLink>

        <HashLink to="#prime" style={{ textDecoration: "none" }}>
          <Page>Prime</Page>
        </HashLink>

        <HashLink to="#-30-" style={{ textDecoration: "none" }}>
          <Page>-30-</Page>
        </HashLink>

        <HashLink to="#about" style={{ textDecoration: "none" }}>
          <Page>About</Page>
        </HashLink>
      </Row>
    </StickyContainer>
  );
}
