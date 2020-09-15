import React, { Component } from "react";
import "./TimeLineCss.css";
// import './TimeLineSettings.js';
export default class ComponentName extends Component {
    ComponentName()
    {
        window.addEventListener("load", callbackFunc);
        window.addEventListener("scroll", callbackFunc); 

    var items = document.getElementsByClassName('itemsDiv');
    alert("Hi");
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
    }
  render() {
    return (
      <div className="TimeLineOuterDiv" id="Timeline">
        <section className="timeline">
          <div className="container head">
            <h2 className="head">Carrier Timeline</h2>
            <hr />
          </div>
          <ul>
            <li className="itemsDiv">
              <div>
                <time>2010-2011</time>
                <br />
                CLASS X - St. Kabir Public School
              </div>
            </li>
            <li className="itemsDiv">
              <div>
                <time>2011-2013</time>
                <br />
                CLASS XII - New Public School
              </div>
            </li>
            <li className="itemsDiv">
              <div>
                <time>2013-2017</time>
                <br />
                Bachelor of Engineering in Computer Science, Chitkara University
              </div>
            </li>
            <li className="itemsDiv">
              <div>
                <time>January, 2017 - May, 2017</time>
                <br />
                Internship as a Front End Developer at ClickLabs, Chandigarh
              </div>
            </li>
            <li className="itemsDiv">
              <div>
                <time>October, 2017- June, 2020</time>
                <br />
                Worked as an Associate Consultant in Capgemini, Mumbai
              </div>
            </li>
            <li className="itemsDiv">
              <div>
                <time>June, 2020 - Current</time>
                <br />
                Full Stack Developer in Heckyl Technologies, Mumbai
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
