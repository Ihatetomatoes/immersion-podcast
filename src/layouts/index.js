import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";

import "./index.css";

const HeaderWrapper = styled.div`
  background-color: #77b2ac;
  padding: 1.45rem 1.0875rem;
  text-align: center;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 2.0875rem 2.45rem;
`;

const HeaderComp = styled.div`
  background-color: #77b2ac;
  margin-bottom: 1.45rem;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
`;

const HeadingLine1 = styled.span`
  color: #fff;
  text-align: left;
  display: block;
  font-size: 0.5em;
  text-transform: lowercase;
`;

const HeadingLine3 = styled.span`
  color: #fff;
  text-align: right;
  display: block;
  font-size: 0.5em;
  text-transform: lowercase;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderComp>
      <h1 style={{ margin: 0, fontWeight: "normal" }}>
        <Link
          to="/"
          style={{
            color: "#fc8c54",
            fontFamily: "Playfair Display, serif",
            textDecoration: "none"
          }}
        >
          <HeadingLine1>The</HeadingLine1> Immersion{" "}
          <HeadingLine3>Podcast</HeadingLine3>
        </Link>
      </h1>
    </HeaderComp>
  </HeaderWrapper>
);

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
    <ContentWrapper>{children()}</ContentWrapper>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
