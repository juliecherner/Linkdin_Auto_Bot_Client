import { Link } from "react-router-dom";
import CardButtons from "../cardButtons/cardButtons"
import { I_Owner } from "../../../../types/types"

interface Props {
    owner: I_Owner;
}

const Card: React.FC <Props> = ({owner}) =>{
    return <div className="main-page-card">
                <div className="main-page-card-general">
                    <img className="object-fil h-10 rounded-full" src={owner.imageSrc} alt="profile"/>
                    <div className="main-page-card-general-info">
                        {/* <Link to="/"><div>{owner.linkdinLink}</div> */}
                        <div className="main-page-card-general-image">{owner.name}</div>
                        {/* </Link> */}
                        <div>right date {/* {owner.updatedAt} */}</div>     
                    </div>
                </div>
                <div className="main-page-card-position">{owner.position}</div>
                <div className="main-page-card-position-info">
                    <div><span>@</span>{owner.email}</div>
                    <div className="main-page-card-position-info-tags">
                    {owner.tags.map((tag: string) => <div key={tag}><span>#</span>{tag}</div>)}
                </div>
            </div>
        <CardButtons owner={owner}/>
    </div>
}

export default Card


