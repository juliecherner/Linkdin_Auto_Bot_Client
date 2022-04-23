import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";

const HeaderLogo: React.FC = () => {
  return (
    <div>
      <Link to="/">
        <img
          className="header-header-logo-image"
          src={logo}
          alt="Velocity Autobot"
        />
      </Link>
    </div>
  );
};
export default HeaderLogo;
