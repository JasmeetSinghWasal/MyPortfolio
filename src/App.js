import React from "react";
import "./App.css";

import Header from "./navbar/header";
import Banner from "./Banner/Banner";
import AboutMe from "./AboutMe/AboutMe";
import WhyWorkWithMe from "./WhyWorkWithMe/WhyWorkWithMe";
import TimeLine from "./TimeLine/TimeLine";
import Footer from './Footer/footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <WhyWorkWithMe></WhyWorkWithMe>
      <TimeLine></TimeLine>
      <Footer></Footer>
    </div>
  );
}

export default App;
