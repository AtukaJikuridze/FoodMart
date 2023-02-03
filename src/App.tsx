import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import Section6 from "./components/Section6/Section6";
import Section7 from "./components/Section7/Section7";
import Section8 from "./components/Section8/Section8";
import Tags from "./components/Tags/Tags";
import Footer from "./components/Footer/Footer";
import ClipLoader from "react-spinners/FadeLoader";
function App() {
  const [load, setLoad] = useState(true);
  setTimeout(() => {}, 4000);
  window.addEventListener("load", () => {
    setLoad(false);
  });
  return (
    <>
      <>
        {load ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <ClipLoader aria-label="Loading Spinner" data-testid="loader" />
          </div>
        ) : null}
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Tags />
        <Footer />
      </>
    </>
  );
}

export default App;
