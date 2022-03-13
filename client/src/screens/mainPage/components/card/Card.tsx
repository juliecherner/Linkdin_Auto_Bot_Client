import { I_Owner } from "../../../../types/types"

interface Props {
    owner: I_Owner;
}

const Card: React.FC <Props> = ({owner}) =>{
    return <div>
        <div>{owner.name}</div>
        <div>{owner.companyName}</div>
        <div>{owner.position}</div>
        <div>{owner.email}</div>
        <div>{owner.linkdinLink}</div>
        <div>{owner.isEmailSent? "sent": "nor sent"}</div>
        <div>{owner.isStared? "stared": "nor stared"}</div>
        <div>{owner.isVmarked? "marked": "not marked"}</div>
        <div>{JSON.stringify(owner.tags)}</div>
        <div>{owner.imageSrc}</div>
        {/* <div>{owner.dateScraped}</div> */}
        <div>{owner.comment}</div>
    </div>
}

export default Card


