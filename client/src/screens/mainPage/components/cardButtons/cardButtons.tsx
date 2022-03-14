import React from 'react'
import { I_Owner } from "../../../../types/types"
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MessageIcon from '@mui/icons-material/Message';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    owner: I_Owner
}

 const CardButtons: React.FC <Props> = ({owner})=> {
  return (
    <div>
        <div>{owner.comment.length > 0 ? <MessageIcon/>: <ChatBubbleIcon color="disabled"/>}</div>

      <div>{owner.isVmarked && <DoneIcon color="success"/>}</div>
      <CloseIcon color="error"/>
      {/* <div>{owner.comment.length > 0 ? "comment": "no comment"}</div> */}
      <div>{owner.isStared? <StarIcon color="success"/>: <StarOutlineIcon/>}</div>
    </div>
  )
}

export default CardButtons