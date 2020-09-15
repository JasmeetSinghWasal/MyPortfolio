import React, { Component } from "react";
import "./headerCss.css";

export default class Header extends Component {
  componentDidMount() {}
  render() {
    return (
      <nav className="topnav-centered navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar ">
        <div className="container">
          <a className="navbar-brand" href="" target="_blank">
            <strong>JSW</strong>
          </a>

          {/* collapse */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div
            className="collapse navbar-collapse navbar-inverse"
            id="navbarSupportedContent"
          >
            {/* Left section */}
            <ul className="nav navbar-nav navBarSetting ">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#AboutMe">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#WorkWithMe">
                  Why me?
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#Timeline">
                  Carrier Timeline
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#bannerBkg">
                  Contact
                </a>
              </li>
            </ul>

            {/* Right section
                    <ul className="navbar-nav nav-flex-icons">
                      <li className="nav-item">
                        <a href="https://www.facebook.com/mdbootstrap" className="nav-link" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="https://twitter.com/MDBootstrap" className="nav-link" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    
                    </ul> */}
          </div>
        </div>
      </nav>
    );
  }
}
