import Card from "../card/Card"
import {I_Owner} from "../../../../types/types"

interface Props {
    owners: I_Owner[]
}

const CardList: React.FC <Props> = ({owners}) => {
    return (<div>
        <div>{owners.map((object: I_Owner) => <Card key={object._id} owner={object}/>)}</div>
    </div>)
    }
    
export default CardList