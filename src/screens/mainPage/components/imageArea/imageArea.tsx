import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../context/user.context";

export default function ImageArea() {
  const { userInputs } = useContext(UserContext);
  return (
    <div>
      <div className="main-page-image-area-title">
        <div>Velocity Venture</div>
      </div>
      {!userInputs.logged && (
        <div className="main-page-image-area-background">
          <Link to="/login">
            <div className="main-page-image-area--login">Login</div>
          </Link>
        </div>
      )}
    </div>
  );
}
