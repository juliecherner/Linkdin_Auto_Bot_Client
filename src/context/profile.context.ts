import { createContext } from "react";
import { Profile } from "../types/types";

type ProfileContent = {
  profiles: Profile[];
  setProfiles: (profiles: Profile[]) => void;
  mode: string;
  setMode: (mode: string) => void;
  trackMode: () => void;
};

export const ProfileContext = createContext<ProfileContent>({
  profiles: [],
  setProfiles: () => null,
  mode: "",
  setMode: () => null,
  trackMode: () => null,
});
