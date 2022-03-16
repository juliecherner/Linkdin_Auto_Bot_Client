import LoginButton from "./components/loginButton/LoginButton"
import HeaderInput from "./components/headerInput/HeaderInput"
import HeaderLogo from "./components/headerLogo/HeaderLogo"
import Menu from "./components/menu/Menu"


const Header: React.FC = () => {
    return (<div className="header">
                <Menu/>
                <HeaderLogo/>
                <HeaderInput/>
                <LoginButton/>
            </div>)
    }
    
export default Header