import React, {useState} from 'react'
import LoginButton from "../loginButton/LoginButton"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const constants: string[] = ["Home", "Scraping Strategies", "About"]

const MenuElement: React.FC = ()=> {
const [openedMenu, setOpenedMenu] = useState(false)
  return (
    <>
        <MenuIcon onClick={()=> setOpenedMenu(!openedMenu)}/>
        {openedMenu && 
        <div className="header-menu-content">
            <div className="header-menu-content-title"> 
                <div>LAB - LinkedIn Auto Bot</div>
                <CloseIcon onClick={()=>setOpenedMenu(!openedMenu)}/>
            </div>
            <div className="header-menu-content-elements">
                {constants.map((text: string) => 
                <div key={text} className="header-menu-content-element" onClick={()=>setOpenedMenu(!openedMenu)}>{text}</div>)}
            </div>
            <div className="header-menu-content-button">
                <LoginButton />
            </div>
        </div>}
    </>)
}
export default MenuElement

