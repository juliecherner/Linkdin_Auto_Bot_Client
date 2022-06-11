import React, { useContext } from "react";
import { ProfileContext } from "../../../../context/profile.context";
import { updateProfile, deleteProfile } from "../../../../api/profile.api";
import { Profile } from "../../../../types/types";
import StarIcon from "@mui/icons-material/Star";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  profile: Profile;
}

const CardButtons: React.FC<Props> = ({ profile }) => {
  const { trackMode } = useContext(ProfileContext);

  const changeStaredMode = async (profile: Profile) => {
    const newObject = { ...profile };
    newObject.isStared = !profile.isStared;
    await updateProfile(newObject);
    trackMode();
  };

  const hideProfile = async (profile: Profile) => {
    await deleteProfile(profile._id);
    trackMode();
  };

  return (
    <>
      <div className="main-page-card-buttons">
        <div className="main-page-card-buttons--actions">
          {/* <DoneIcon color="success" /> */}
          <CloseIcon color="error" onClick={() => hideProfile(profile)} />
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
    </>
  );
};

export default CardButtons;
