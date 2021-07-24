import React, { useState } from "react";
import "../../css/Banner.css";
import bannerImg from "../../assets/black-friday.jpg";
import Countdown from "../Countdown";
import { Button } from "../Button";

function BannerBlackFriday() {
  const [toggle, setToggle] = useState(true);
  const [email, setEmail] = useState("");

  function handleClick() {
    setToggle(!toggle);
  }

  function handleEmailForm() {
    localStorage.setItem("email", email);
    console.log("Saved on localStorage: ", localStorage.getItem("email"));
    setToggle(false);
  }
  return (
    <>
      {toggle && (
        <div className="banner-container">
          <div className="banner-close">
            <button onClick={handleClick}>
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="banner-heading">
            <img src={bannerImg} alt="Black Friday" />
          </div>

          <div className="banner-text">
            <h1>26 de novembro</h1>

            <p>Seus produtos prediletos com até 70% de desconto!</p>
          </div>
          <Countdown />
          <form className="form-wrapper">
            <p>Cadastre seu e-mail e não fique fora dessa!</p>
            <input
              className="form-input"
              type="email"
              value={email}
              placeholder="Enter your e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button buttonStyle="btn--primary" onClick={handleEmailForm}>
              Subscribe
            </Button>
          </form>
        </div>
      )}
    </>
  );
}

export default BannerBlackFriday;
