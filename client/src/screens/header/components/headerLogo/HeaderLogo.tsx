import React from 'react'
import logo from "../../../../assets/images/logo.png"


const HeaderLogo : React.FC = ()=>{
  return (<div>
            <img className="header-header-logo-image" src={logo} alt="Velocity Autobot"/>
          </div>)
  
}
export default HeaderLogo