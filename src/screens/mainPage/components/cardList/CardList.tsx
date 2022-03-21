import {useContext} from "react"
import Card from "../card/Card"
import {I_Profile} from "../../../../types/types"
import {ProfileContext} from "../../../../context/profile.context"

const CardList: React.FC = () => {
    const {profiles} = useContext(ProfileContext)
    return (<div className="main-page-card-list">
       {profiles.map((profile: I_Profile) => <Card key={profile._id} profile={profile}/>)}
    </div>)
    }
    
export default CardList