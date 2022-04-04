import {createContext} from "react";
import {I_Profile} from "../types/types"


type ProfileContent = {
    profiles: I_Profile[];
    setProfiles:(profiles: I_Profile[]) => void
    mode: string; 
    setMode: (mode: string) => void
  }

  export const ProfileContext = createContext<ProfileContent>({
  profiles: [],
  setProfiles: () => {},
  mode: "",
  setMode: () => {}
  })
