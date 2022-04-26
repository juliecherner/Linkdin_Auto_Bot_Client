import { useState } from "react";
import { ProfileContext } from "../context/profile.context";
import { Profile } from "../types/types";
import { getProfiles } from "../api/profile.api";

const ProfileProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<string>("Relevant");
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const trackMode = async () => {
    switch (mode) {
      case "Relevant":
        const relevant = await getProfiles({}, {});
        setProfiles(relevant);
        break;
      case "Latest":
        const latest = await getProfiles({}, { field: "createdAt", order: -1 });
        setProfiles(latest);
        break;
      case "Stared":
        const stared = await getProfiles({ isStared: true }, {});
        setProfiles(stared);
        break;
      default:
        const defaultData = await getProfiles({}, {});
        setProfiles(defaultData);
    }
  };
  return (
    <ProfileContext.Provider
      value={{ mode, setMode, profiles, setProfiles, trackMode }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
