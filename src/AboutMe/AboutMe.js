import React, { Component } from "react";
import "./AboutMeCss.css";
import dp from "./PortfolioPic.png";

export default class AboutMe extends Component {
  render() {
    return (
      <section className="container-fluid AboutMeBkg" id="AboutMe">
        <div className="row">
            <div className="col-lg-1"></div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <img id="dpRound" srcSet={dp} alt="profilePic" />
          </div>
          <div className="col-lg-7 col-md-8 col-sm-12 AboutMeText">
            My whole life I've loved making and creating things with my own hands, with whatever I had around me and these creative ideas that always fill my head.<br></br>
            I'm a full stack developer with about 3.5 years of experience in the IT
            field. <br></br>My Specialties include quickly learning new skills and Technology Stacks, Problem Solving, Responsive Design, Website Optimization and Model View Controller (MVC) method of organizing code.
            
          </div>
          <div className="col-lg-1"></div>
        </div>
      </section>
    );
  }
}
