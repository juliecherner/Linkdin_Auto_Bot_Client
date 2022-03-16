import Card from "../card/Card"
import {I_Profile} from "../../../../types/types"

interface Props {
    profiles: I_Profile[]
}

const CardList: React.FC <Props> = ({profiles}) => {
    return (<div className="main-page-card-list">
       {profiles.map((object: I_Profile) => <Card key={object._id} profile={object}/>)}
    </div>)
    }
    
export default CardList