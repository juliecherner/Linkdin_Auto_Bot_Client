import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const HeaderInput: React.FC = ()=> {
  return (
    <div className="header-header-input">
      <input className="header-header-input--input"/>
      <SearchOutlinedIcon onClick={()=> console.log("confirm certain input")}/>
    </div>
  )
}
export default HeaderInput