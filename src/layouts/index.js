import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Bios from '../components/Bios'

import "../css/styles.scss";

const Header = () => (
  <div className="header-wrapper">
    <header>
      <h1>
        <Link to="/">
          <span className="heading-line-1">The</span> Immersion{" "}
          <span className="heading-line-3">Podcast</span>
        </Link>
      </h1>
    </header>
  </div>
);

const Footer = () => {
  const date = new Date();
  const year = date.getUTCFullYear();
  return (
    <div className="footer-wrapper">
      <footer>
        <p>&copy; {`${year} The Immersion Podcast`}</p>
      </footer>
    </div>
  )
};

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="The Immersion Podcast"
      meta={[
        {
          name: "description",
          content:
            "The Immersion Podcast hosted by Robe Levin and Petr Tichy. Tune in for a weekly podcast where we talk about webdesign and front-end webdevelopment topics."
        },
        {
          name: "keywords",
          content:
            "webdesign, podcast, front-end, Rob Levin, Petr Tichy, svg, javascript, react, illustration, ihatetomatoes, html5, css3"
        }
      ]}
    />
    <Header />
    {children()}
    <Bios />
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
