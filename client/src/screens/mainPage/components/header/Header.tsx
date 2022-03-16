import LoginButton from "../atoms/loginButton/LoginButton"
import HeaderInput from "../atoms/headerInput/HeaderInput"
import HeaderLogo from "../atoms/headerLogo/HeaderLogo"
import Menu from "../atoms/menu/Menu"


const Header: React.FC = () => {
    return (<div className="header">
                <Menu/>
                <HeaderLogo/>
                <HeaderInput/>
                <LoginButton/>
            </div>)
    }
    
export default Header