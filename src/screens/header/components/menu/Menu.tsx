import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../loginButton/LoginButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface routeObject {
  text: string;
  route: string;
}

const constants: routeObject[] = [
  { text: "Home", route: "/" },
  { text: "Scraping Strategies", route: "/scraping-strategies" },
  { text: "About", route: "/about" },
];

const MenuElement: React.FC = () => {
  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <>
      <MenuIcon onClick={() => setOpenedMenu(true)} />
      {openedMenu && (
        <div className="header-menu-content">
          <div className="header-menu-content-title">
            <div>LAB - LinkedIn Auto Bot</div>
            <CloseIcon onClick={() => setOpenedMenu(false)} />
          </div>
          <div className="header-menu-content-elements">
            {constants.map((object: routeObject) => (
              <div
                key={object.text}
                className="header-menu-content-element"
                onClick={() => setOpenedMenu(false)}
              >
                <Link to={object.route}>{object.text}</Link>
              </div>
            ))}
          </div>
          <div
            className="header-menu-content-button"
            onClick={() => setOpenedMenu(false)}
          >
            <LoginButton />
          </div>
        </div>
      )}
    </>
  );
};
export default MenuElement;
