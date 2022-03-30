import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/linkedin-crawler-image.jpeg";
//
const AboutPage: React.FC = () => {
  return (
    <div className="  bg-slate-200 h-screen ">
      <div className="bg-slate-200 text-center ">
        <img className="about-logo-image" src={logo} alt="Velocity Autobot" />
        <div className="absolute top-40 left-10 text-white text-2xl text-center">
          We are Linkdin Auto Bot
        </div>
        <div className="text-center bg-slate-200 mx-4 my-4">
          <q>we specialize in costumized solutions for the business market</q>
        </div>
        <div className="text-center bg-slate-100 mx-4 my-4">
          we offer solutions in:
        </div>
        <h2 className="text-xl">web scraping</h2>
        <h2 className="text-xl">full stack website design</h2>
        <h2 className="text-xl">front end</h2>
        <h2 className="text-xl">back end</h2>
        <h2 className="text-xl">and more</h2>
        <div className=" bg-slate-100  my-15">
          <Link to={"/MainPage"}>contact us</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
