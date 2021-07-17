import React from "react";
import EmailForm from "../EmailForm";
import "./Banner.css";
import bannerImg from "../../assets/black-friday.jpg";
import Countdown from "../Countdown";

function BannerBlackFriday() {
  return (
    <div className="banner-container">
      <div className="banner-heading">
        <img src={bannerImg} alt="Black Friday" />
      </div>

      <div className="banner-text">
        <h1>26 de novembro</h1>

        <p>Seus produtos prediletos com até 70% de desconto!</p>
      </div>

      <Countdown />

      <EmailForm />
    </div>
  );
}

export default BannerBlackFriday;
