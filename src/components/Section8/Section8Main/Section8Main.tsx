import React from "react";
import Section8DownloadButtons from "./Section8DownloadButtons/Section8DownloadButtons";
import "./Section8Main.css";

export default function Section8Main() {
  return (
    <div className="section8-information">
      <img className="phone" src={require("../Section8Images/phone.png")} alt="" />
      <div className="section8-information-text">
        <h1>Shop faster with foodmart App</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed
          ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis
          amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis.
          Amet blandit tortor praesent ante vitae. A, enim pretiummi senectus
          magna. Sagittis sed ptibus liberolectus non et psryroin.
        </p>
        <div className="downloadButtons">
          <Section8DownloadButtons
            title="Google Play"
            img={require("../Section8Images/Google Play logo.png")}
          />
          <Section8DownloadButtons
            title="App Store"
            img={require("../Section8Images/Apple logo.png")}
          />
        </div>
      </div>
    </div>
  );
}
