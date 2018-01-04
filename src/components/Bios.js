import React, { Component } from "react";
import PropTypes from "prop-types";
import image from '../images/img_petr-tichy-ihatetomatoes.jpg';
import image2 from '../images/img_rob-levin.jpg';

const Bios = () => {
    return (
    <div className="bios">
      <div className="content-wrapper">
        <h2>About Us</h2>
        <div className="bios-box">
            <div className="bios-box__item">
                <div className="bios-box__img">
                    <img src={image} />
                </div>
                <div className="bios-box__copy">
                    <h3>Petr Tichy</h3>
                    <p className="bio-title">Front-End Developer, YouTuber</p>
                    <p>Petr is a front-end web developer with a passion for pixel-perfect code, innovative digital products and state-of-the-art websites.</p>
                    <ul>
                        <li><a href="https://ihatetomatoes.net/" target="_blank">Visit Petr's Website</a></li>
                        <li><a href="https://www.youtube.com/channel/UC7O6CntQoAI-wYyJxYiqNUg?sub_confirmation=1" target="_blank">Ihatetomateos Channel</a></li>
                        <li><a href="https://twitter.com/ihatetomatoes" target="_blank">@ihatetomatoes</a></li>
                    </ul>
                </div>
            </div>
            <div className="bios-box__item alt">
                <div className="bios-box__img">
                    <img src={image2} />
                </div>
                <div className="bios-box__copy">
                    <h3>Rob Levin</h3>
                    <p className="bio-title">Designer / Developer</p>
                    <p>Rob is a Senior UI/UX Developer at Mavenlink where he bridges the worlds of UX, Illustration, and Development for the company's flagship Project Management application.</p>
                    <ul>
                    <li><a href="https://www.instagram.com/roblevintennis/" target="_blank">Rob on Instagram</a></li>
                        <li><a href="https://dribbble.com/roblevintennis" target="_blank">Rob on Dribble</a></li>
                        <li><a href="https://twitter.com/roblevintennis" target="_blank">@roblevintennis</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

Bios.propTypes = {
    
};

export default Bios;