import React from 'react'
import {Link} from "react-router-dom"

const LoginButton: React.FC = () =>{
  return (
    <div className="header--login-button">
       <Link to="/login">
      Login
      </Link>
    </div>
  )
}

export default LoginButton