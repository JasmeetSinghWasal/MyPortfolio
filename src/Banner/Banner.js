import React, { Component } from "react";
import "./BannerCss.css";

export default class Banner extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/a076d05399.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      
        <section id="bannerBkg" >
          <div id="introDiv">
            <span id="nameIntro" className="w3-center w3-animate-left">
              Hello, I'm <span className="bannerColor">Jasmeet Singh Wasal</span>
            </span>
            <br />
            <span id="oneLiner" className="w3-center w3-animate-right">
              Lover of code, coffee and lack of sleep
            </span>
            <div id="connect-icons" className="w3-center w3-animate-top" >
              <span>
                <a target="_blank" className="bannerColor" href="https://www.linkedin.com/in/jasmeet-singh-wasal">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a>
              </span>
              <span>
                <a target="_blank" className="bannerColor" href="mailto:jswasal@gmail.com">
                  <i className="fab fa-google" aria-hidden="true"></i>
                </a>
              </span>
              
              <span>
                <a target="_blank" className="bannerColor" href="https://www.hackerrank.com/SinghJasmeet?hr_r=1">
                  <i className="fab fa-hackerrank" aria-hidden="true"></i>
                </a>
              </span>
            </div>
          </div>
        </section>
       
      
    );
  }
}
