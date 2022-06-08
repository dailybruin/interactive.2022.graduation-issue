import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import { mediaQueries } from "./shared/config";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import landing_gif from "./gradissue22.titleanimation.gif";

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

const BorderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100vw;
`;

const Articles = styled.div`
  margin: auto;
  ${mediaQueries.mobile} {
    grid-column: 1/3;
    margin: auto;
    width: 100vw;
  }
`;

const LeftContainer = styled.div`
  justify-self: flex-start;
  img {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    padding-top: 100px;
    ${mediaQueries.mobile} {
      display: none;
    }
  }
`;

const RightContainer = styled.div`
  justify-self: flex-end;
  img {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    padding-top: 100px;
    ${mediaQueries.mobile} {
      display: none;
    }
  }
`;

const Section = styled.div`
  font-family: "Macondo", cursive;
  text-transform: uppercase;
  font-size: 100px;
  font-weight: 400;
  color: #785887;
  margin: 100px auto 40px auto;
  ${mediaQueries.mobile} {
    font-size: 40px;
  }
`;

const AppContent = () => {
  const [data, setData] = useState(null);
  const [landingDisplayed, setLandingDisplayed] = useState(false);

  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2022.grad-issue"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  return (
    <>
      {data && (
        <div className="App">
          <Header />
          <Landing
            landing_gif={landing_gif}
            landing_image={data.landing_image}
            landing_credits={data.landing_credits}
            setLandingDisplayed={setLandingDisplayed}
          />
          {landingDisplayed && (
            <>
              <NavBar />
              <EditorLetter editor_letter={data.editor_letter} />
              <Section>Timeline</Section>
              <Timeline />
              <BorderGrid>
                <LeftContainer>
                  {" "}
                  <img src={leftBorder} />{" "}
                </LeftContainer>
                <Articles>
                  <Section id="news">News</Section>
                  <ArticleGrid articles={data.news} />
                  <Section id="sports">Sports</Section>
                  <ArticleGrid articles={data.sports} />
                  <Section id="arts">Arts</Section>
                  <ArticleGrid articles={data.arts} />
                  <Section id="opinion">Opinion</Section>
                  <ArticleGrid articles={data.opinion} />
                  <Section id="the-quad">The Quad</Section>
                  <ArticleGrid articles={data.quad} />
                  <Section id="multimedia">Multimedia</Section>
                  <ArticleGrid articles={data.multimedia} />
                  <Section id="prime">Prime</Section>
                  <ArticleGrid articles={data.prime} />
                  <Section id="-30-">-30-</Section>
                  <DescriptionBox />
                  <ArticleGrid articles={data.thirty} />
                </Articles>
                <RightContainer>
                  {" "}
                  <img src={rightBorder} />{" "}
                </RightContainer>
              </BorderGrid>
              <About about={data.about} />
              <Footer />
            </>
          )}
        </div>
      )}
    </>
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
