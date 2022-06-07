import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import { mediaQueries } from "./shared/config";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import leftBorder from "./images/leftBorder.svg";
import rightBorder from "./images/rightBorder.svg";

// import Border from "./components/Border.js";
import EditorLetter from "./components/EditorLetter";
import About from "./components/About";
// import BannerAd from "./components/BannerAd";
import Landing from "./components/Landing";
import Timeline from "./components/timeline/timeline";
import NavBar from "./components/NavBar";
import ArticleGrid from "./components/ArticleGrid";
import DescriptionBox from "./components/DescriptionBox";


const Articles = styled.div`
  margin: auto;
`

const BorderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;
`

const LeftContainer = styled.div`
  width: fit-content;
  justify-self: flex-start;
  img {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    padding-top: 100px;
  }
`

const RightContainer = styled.div`
  justify-self: flex-end;
  width: fit-content;
  img {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    padding-top: 100px;
  }
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

  data && console.log(data); 

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
      {data && <EditorLetter editor_letter={data.editor_letter} />}
      <Section>
        Timeline
      </Section>
      <Timeline />
      <BorderGrid>
          <LeftContainer> <img src= {leftBorder}/> </LeftContainer>  
          <Articles>
            <Section id="news">News</Section>
            {data && <ArticleGrid articles={data.news}/>}
            <Section id="sports">Sports</Section>
            {data && <ArticleGrid articles={data.sports}/>}
            <Section id="arts">Arts</Section>
            {data && <ArticleGrid articles={data.arts}/>}
            <Section id="opinion">Opinion</Section>
            {data && <ArticleGrid articles={data.opinion}/>}
            <Section id="the-quad">The Quad</Section>
            {data && <ArticleGrid articles={data.quad}/>}
            <Section id="multimedia">Multimedia</Section>
            {data && <ArticleGrid articles={data.multimedia}/>}
            <Section id="prime">Prime</Section>
            {data && <ArticleGrid articles={data.prime}/>}
            <Section id="-30-">-30-</Section>
            <DescriptionBox/>
            {data && <ArticleGrid articles={data.thirty}/>}
          </Articles>
          <RightContainer> <img src= {rightBorder}/> </RightContainer> 
      </BorderGrid>
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
