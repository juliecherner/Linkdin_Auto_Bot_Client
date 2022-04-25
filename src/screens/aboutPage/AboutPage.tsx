import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import Button from "@mui/material/Button";

const solutions = [
  "Search in Israel",
  "Search by people",
  "Searchwords by choice",
  "Sorting, deleting, staring results",
];

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <img src={logo} alt="Velocity Ventures" />
      <div className="about-page-name">LinkedIn Auto Bot</div>
      <div className="about-page-solutions-title">Functionality</div>
      <div className="about-page-solutions">
        {solutions.map((solution) => (
          <div key={solution} className="about-page-solution">
            {solution}
          </div>
        ))}
      </div>
      <div className="about-page--links">
        <Link to="/scraping-strategies">
          <Button fullWidth variant="contained" color="success">
            Set scrapping strategy
          </Button>
        </Link>
        <Link to="/">
          <Button fullWidth variant="contained" color="info">
            Get results
          </Button>
        </Link>
      </div>
      <a
        href="https://www.linkedin.com/company/velocityventures/"
        rel="noreferrer"
        target="_blank"
      >
        <div className="about-page--contact">Contact us</div>
      </a>
    </div>
  );
};

export default AboutPage;
