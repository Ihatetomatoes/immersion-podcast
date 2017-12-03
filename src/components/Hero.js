import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import AudioPlayer from '../components/AudioPlayer';

const Hero = ({latestPost}) => {
  const {title, overview, season, duration, date, file} = latestPost.frontmatter;
  const {slug} = latestPost.fields;
    return (
    <div className="hero">
      <div className="content-wrapper">
        <div className="post">
          <div className="post__meta">
            <p className="episode__meta">
              <span className="episode__season">{season}</span>
              <span className="episode__duration">{duration}</span>
            </p>
            <h1>{title}</h1>
            <p className="post__date">{date}</p>
          </div>
          <p className="episode__overview">
            {overview}
          </p>
          <AudioPlayer file={file} />
          <p>
            <Link to={slug}>View show details</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
    latestPost: PropTypes.object
};

export default Hero;