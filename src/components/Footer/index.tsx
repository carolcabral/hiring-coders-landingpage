import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrapper">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              LOGO
            </Link>
          </div>
          <small className="website-rights">
            Ana Carolina Cabral - Hiring Coders © 2021{" "}
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin" />
            </Link>
            <Link
              className="social-icon-link github"
              to="/"
              target="_blank"
              aria-label="Github"
            >
              <i className="fab fa-github" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/*<div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/"> How it works </Link>
                        <Link to="/"> Testimonials </Link>
                        <Link to="/"> Careers </Link>
                        <Link to="/"> Investors </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/"> How it works </Link>
                        <Link to="/"> Testimonials </Link>
                        <Link to="/"> Careers </Link>
                        <Link to="/"> Investors </Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/"> How it works </Link>
                        <Link to="/"> Testimonials </Link>
                        <Link to="/"> Careers </Link>
                        <Link to="/"> Investors </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/"> How it works </Link>
                        <Link to="/"> Testimonials </Link>
                        <Link to="/"> Careers </Link>
                        <Link to="/"> Investors </Link>
                    </div>
                </div>  
            </div>
*/
export default Footer;
