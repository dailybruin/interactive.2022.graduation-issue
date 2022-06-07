import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import { mediaQueries } from "./shared/config";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleCard from "./components/ArticleCard";

import leftBorder from "./images/leftBorder.svg";
import rightBorder from "./images/rightBorder.svg";

// import Border from "./components/Border.js";
import EditorLetter from "./components/EditorLetter";
import About from "./components/About";
import BannerAd from "./components/BannerAd";
import Landing from "./components/Landing";
import Timeline from "./components/timeline/timeline";
import NavBar from "./components/NavBar";


const Articles = styled.div`
  width: 100%;

  ${mediaQueries.mobile} {
    /* background-fit: cover; */
    background-repeat: repeat-y;
    background-size: 100% 50%;
  }
`;

const LeftContainer = styled.img`
  padding-top: 90px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  margin-top: -100px;
`

const RightContainer = styled.img`
  padding-top: 90px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
`

const Section = styled.div`
  font-family: "Macondo", cursive;
  text-transform: uppercase;
  font-size: 100px;
  font-weight: 400;
  color: #785887;
  margin: 100px auto 40px auto;
`;

const AppContent = () => {
  const [data, setData] = useState(null);

  console.log("here");

  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2022.grad-issue"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  return (
    <div className="App">
      <Header />
      {data && (
        <Landing
          landing_image={data.landing_image}
          landing_credits={data.landing_credits}
        />
      )}
      <NavBar />
      {data &&<EditorLetter editor_letter={data.editor_letter} />}
      <Section>
        Timeline
      </Section>
      <Timeline />
      <Articles>
        {/* <LeftContainer src= {leftBorder}/>
        <RightContainer src= {rightBorder}/> */}
        <Section id="news">News</Section>
        <Section id="sports">Sports</Section>
        <Section id="arts">Arts</Section>
        <Section id="opinion">Opinion</Section>
        <Section id="the-quad">The Quad</Section>
        <Section id="multimedia">Multimedia</Section>
        <Section id="prime">Prime</Section>
        <Section id="-30-">-30-</Section>
      </Articles>
      {data && <About about={data.about} />}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
