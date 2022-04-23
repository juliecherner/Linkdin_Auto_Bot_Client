import LoginButton from "./components/loginButton/LoginButton";
import HeaderLogo from "./components/headerLogo/HeaderLogo";
import Menu from "./components/menu/Menu";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-menu">
        <Menu />
        <HeaderLogo />
      </div>
      <LoginButton />
    </div>
  );
};

export default Header;
