import { Link } from "react-router-dom";
import CardButtons from "../cardButtons/cardButtons"
import { I_Owner } from "../../../../types/types"

interface Props {
    owner: I_Owner;
}

const Card: React.FC <Props> = ({owner}) =>{
    return <div className="h-1/5 text-xs border-2 border-indigo-600 p-2">
        <div className="grid grid-cols-3 border-2 border-green-600 gap-x-2">
            <div>link to img{owner.imageSrc}</div>
            <div className="col-span-2">
                {/* <Link to="/"><div>{owner.linkdinLink}</div> */}
                    <div>Name:{owner.name}</div>
                 {/* </Link> */}
            <div>right date {/* <div>{owner.dateScraped}</div> */}</div>     
                </div>
            </div>
        
        {/* <div>{owner.companyName}</div> don't need by figma */}
        <div>Position: {owner.position}</div>
        
        <div className="grid grid-cols-3">
            <div>{owner.email}</div>
            <div className="col-span-2">{JSON.stringify(owner.tags)}</div>
        </div>

        {/* <div>{owner.isEmailSent? "sent": "nor sent"}</div> */}

        <CardButtons owner={owner}/>
        <div className="h-4 bg-[#F5F5F5]"></div>
    </div>
}

export default Card


