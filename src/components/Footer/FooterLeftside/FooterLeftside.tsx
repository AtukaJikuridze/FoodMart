import React from "react";
import "./FooterLeftside.css";
import { Col } from "react-bootstrap";
import { TfiFacebook } from "react-icons/tfi";
import { BsTwitter, BsYoutube, BsSnapchat } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function FooterLeftside() {
  return (
    <Col>
      <div className="footer-leftside-main">
        <div className="footer-leftside">
          <img src={require("../../../images/logo.png")} alt="" />
          <div className="footer-social-medias">
            <div className="social-media-box">
              <TfiFacebook />
            </div>
            <div className="social-media-box">
              <BsTwitter />
            </div>
            <div className="social-media-box">
              <AiFillInstagram />
            </div>
            <div className="social-media-box">
              <BsYoutube />
            </div>
            <div className="social-media-box">
              <BsSnapchat />
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}
