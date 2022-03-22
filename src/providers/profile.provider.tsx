import { useState } from "react"
import { ProfileContext } from "../context/profile.context"
import { I_Profile } from "../types/types"

const ProfileProvider: React.FC = ({children}) => {
    const [mode, setMode] = useState<string>("Relevant")
    const [profiles, setProfiles] = useState<I_Profile[]>([])
return <ProfileContext.Provider value={{mode, setMode, profiles, setProfiles}}>{children}</ProfileContext.Provider>
}

export default ProfileProvider