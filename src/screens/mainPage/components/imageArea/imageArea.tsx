import React, { useContext } from "react";
import image from "../../../../assets/images/linkedin-crawler-image.jpeg";
import { UserContext } from "../../../../context/user.context";

export default function ImageArea() {
  const { userInputs } = useContext(UserContext);
  return (
    <div>
      <div className="main-page-image-area">
        <div>Velocity Venture</div>
      </div>
      {!userInputs.logged && (
        <img src={image} alt="Velocity LinkedIn Crawler" />
      )}
    </div>
  );
}
