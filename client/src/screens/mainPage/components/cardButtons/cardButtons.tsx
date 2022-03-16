import React, {useState} from 'react'
import { I_Owner } from "../../../../types/types"
import StarIcon from '@mui/icons-material/Star';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

interface Props {
    owner: I_Owner
}

const CardButtons: React.FC <Props> = ({owner})=> {
const [showComment, setShowComment] = useState(false)
  return (
    <>
      <div className="main-page-card-buttons">
        <div onClick={()=> setShowComment(!showComment)}>
          {owner.comment.length > 0 ? <MessageOutlinedIcon/>: <ChatBubbleOutlineOutlinedIcon/>}
        </div>
        <div className="main-page-card-buttons--actions">
          <DoneIcon color="success"/>
          <CloseIcon color="error"/>
          <div>{owner.isStared? <div style={{color:"gold"}}><StarIcon/></div>: <div style={{color:"gray"}}><StarIcon/></div>}</div>
        </div>
      </div>
      <div>
        {showComment && <div>{owner.comment.length > 0 ? owner.comment: "No comment"}</div>}
      </div>
    </>
  )
}

export default CardButtons

