import React, { Component } from "react";

import "./WhyWorkWithMeCss.css";

export default class ComponentName extends Component {
  render() {
    return (
      <section className="reasons-to-employ text-center" id="WorkWithMe">
        <div className="container">
          <h2>Why work with me?</h2>
          <hr />
          <p>There are many advantages to working with me. Here are a few:</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="reasons-container">
                <i className="fas fa-code fa-3x" aria-hidden="true"></i>
                <h3>Passionate about development</h3>
                <p>
                  Big believer in the fact that the greatest work is done by
                  passionate people.I love to code because if I can think it, I
                  can make it a reality
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="reasons-container">
                <i className="fab fa-leanpub fa-3x" aria-hidden="true"></i>
                <h3>Quick learner</h3>
                <p>
                  Confident in my ability to learn something new and put it into
                  production. Thrive in fast-paced and competitive environments.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="reasons-container">
                <i className="fas fa-users fa-3x" aria-hidden="true"></i>
                <h3>Adaptable</h3>
                <p>
                  Always excited to learn new things. The most valuable thing I
                  can provide to your company is the ability to be molded to
                  your stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
