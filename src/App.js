import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import { mediaQueries } from "./shared/config";

import Header from './components/Header';
import Footer from './components/Footer';
import ArticleCard from "./components/ArticleCard";

import upLeaf from './images/upLeaf.svg';
import caterpillar from './images/caterpillar.svg';
import cocoon from './images/cocoon.svg';
import butterfly1 from './images/butterfly1.svg';
import butterfly2 from './images/butterfly2.svg';
import downLeaf from './images/downLeaf.svg';

import Border from './components/Border.js';
import EditorLetter from "./components/EditorLetter";
import About from "./components/About";

const Content = styled.div `
  width: 95%;
  margin: 0 auto;
  /* background-image: 
    url(${upLeaf}), url(${caterpillar}), url(${cocoon}), url(${butterfly1}), url(${butterfly2}), url(${downLeaf});
  background-position: left 5% top 5%, left 5% top 25%, left 5% top 35%, left 5% top 50%, left 5% top 65%, left 5% top 80%; */
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* overflow: visible; */
  /* display: inline-block; */

  ${mediaQueries.mobile} {
    /* background-fit: cover; */
    background-repeat:repeat-y;
    background-size:100% 50%;
}`

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2022.grad-issue")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <div className="App">
      <Header/>
      {data && <EditorLetter editor_letter={data.editor_letter} />}
      <Content>
      </Content>
      {data && <About about={data.about} />}
      <Footer/>
    </div>
  );
}

export default App;
