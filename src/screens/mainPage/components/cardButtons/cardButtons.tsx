import React, {useState} from 'react'
import {I_Profile} from "../../../../types/types"
import StarIcon from '@mui/icons-material/Star';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

interface Props {
    profile: I_Profile
}

const CardButtons: React.FC <Props> = ({profile})=> {
const [showComment, setShowComment] = useState(false)
  return (
    <>
      <div className="main-page-card-buttons">
        <div onClick={()=> setShowComment(!showComment)}>
          {profile.comment.length > 0 ? <MessageOutlinedIcon/>: <ChatBubbleOutlineOutlinedIcon/>}
        </div>
        <div className="main-page-card-buttons--actions">
          <DoneIcon color="success"/>
          <CloseIcon color="error"/>
          <div>{profile.isStared? <div style={{color:"gold"}}><StarIcon/></div>: <div style={{color:"gray"}}><StarIcon/></div>}</div>
        </div>
      </div>
      <div>
        {showComment && <div>{profile.comment.length > 0 ? profile.comment: "No comment"}</div>}
      </div>
    </>
  )
}

export default CardButtons

