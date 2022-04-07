import React, { useState } from "react";
import { updateProfile } from "../../../../api/profile.api";
import { I_Profile } from "../../../../types/types";
// import { printHTTPErrors } from "../utils/fetch.utils";

import StarIcon from "@mui/icons-material/Star";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
// import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

interface Props {
  profile: I_Profile;
}

const CardButtons: React.FC<Props> = ({ profile }) => {
  // const [showComment, setShowComment] = useState(false);

  const changeStaredMode = async (profile: I_Profile) => {
    const newObject = { ...profile };
    newObject.isStared = !profile.isStared;
    console.log("original", profile);
    console.log("updated", newObject);

    const changedProfile = await updateProfile(newObject);
    console.log("response", changedProfile);
  };
  return (
    <>
      <div className="main-page-card-buttons">
        {/* <div onClick={()=> setShowComment(!showComment)}>
          {profile.comment.length > 0 ? <MessageOutlinedIcon/>: <ChatBubbleOutlineOutlinedIcon/>}
        </div> */}
        <div className="main-page-card-buttons--actions">
          <DoneIcon color="success" />
          <CloseIcon color="error" />

          {profile.isStared ? (
            <div
              style={{ color: "gold" }}
              onClick={() => changeStaredMode(profile)}
            >
              <StarIcon />
            </div>
          ) : (
            <div
              style={{ color: "gray" }}
              onClick={() => changeStaredMode(profile)}
            >
              <StarIcon />
            </div>
          )}
        </div>
      </div>

      {/* <div>
        {showComment && <div>{profile.comment.length > 0 ? profile.comment: "No comment"}</div>}
      </div> */}
    </>
  );
};

export default CardButtons;
