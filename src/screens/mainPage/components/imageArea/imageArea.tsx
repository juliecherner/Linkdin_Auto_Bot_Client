import React from "react";
import image from "../../../../assets/images/linkedin-crawler-image.jpeg";

export default function imageArea() {
  return (
    <div>
      <div className="main-page-image-area">
        <div>Velocity Venture</div>
        <div>
          First check collaborative fund, specializing in pre-seed startups.
        </div>
      </div>
      <img src={image} alt="Velocity LinkedIn Crawler" />
    </div>
  );
}
