import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/linkedin-crawler-image.jpeg";
//
const AboutPage: React.FC = () => {
  const solutions = [
    "web scraping",
    "full stack website design",
    "front end",
    "back end",
    "and more",
  ];

  return (
    <div className="about-page ">
      <img className="" src={logo} alt="Velocity Autobot" />

      <div className="about-page-quote">
        <q>we specialize in costumized solutions for the business market</q>
      </div>
      <div className="about-page-solutions-title">we offer solutions in:</div>
      {solutions.map((solution) => (
        <div key={solution} className="login-page-solution">
          {solution}
        </div>
      ))}
    </div>
  );
};

export default AboutPage;
