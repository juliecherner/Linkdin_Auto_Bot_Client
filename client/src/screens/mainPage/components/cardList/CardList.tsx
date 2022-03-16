import Card from "../card/Card"
import {I_Owner} from "../../../../types/types"

interface Props {
    owners: I_Owner[]
}

const CardList: React.FC <Props> = ({owners}) => {
    return (<div className="main-page-card-list">
       {owners.map((object: I_Owner) => <Card key={object._id} owner={object}/>)}
    </div>)
    }
    
export default CardList