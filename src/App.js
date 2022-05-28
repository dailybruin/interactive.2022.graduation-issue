import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionComponent from "./components/Section";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("<TODO: insert api url here>")
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  return (
    <div className="App">
      <Header />

      {/* Landing Illo */}
      <SectionComponent background={"#C4C4C4"} height={"878px"} />

      {/* Tab */}
      <SectionComponent background={"#CDE2ED"} height={"95px"} />

      {/* Letter From The Editors */}
      <SectionComponent background={"#CDE2ED"} height={"1056px"} />

      {/* TIMELINE Text */}
      <SectionComponent background={"#CDE2ED"} height={"101px"} />

      {/* Timeline */}
      <SectionComponent background={"#C4C4C4"} height={"878px"} />

      {/* All articles */}
      <SectionComponent background={"#CDE2ED"} height={"16301px"} />

      <Footer />
    </div>
  );
}

export default App;
