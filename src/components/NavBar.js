import React from "react";
import styled from "styled-components";

import { HashLink } from "react-router-hash-link";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px auto auto 3%;
  align-items: center;
  background-color: #d0d5bf;
  width: fit-content;
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
  box-sizing: border-box;
  padding: 2px 10px;
`;

export default function NavBar(props) {
  return (
    <Container>
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
    </Container>
  );
}