import {useEffect, useState} from "react"
import CardList from "./components/cardList/CardList"
import Togglers from "./components/togglers/Togglers"
import ImageArea from "./components/imageArea/imageArea"
import {I_Profile} from "../../types/types"
import Api from "../../api/Api"


const MainPage: React.FC = () => {
    const [mode, setMode] = useState<string>("Relevant")
    const [profiles, setProfiles] = useState<I_Profile[]>([])

    console.log("actial data", profiles)


    const changeMode = (event: React.MouseEvent<HTMLButtonElement>, toggler:string) => {
    setMode(toggler) 
    }

    const trackMode = async (mode: string) => {
        switch (mode){
            case "Relevant": 
            const relevant = await Api.get("/api/profile/profiles")
            setProfiles(relevant.data) 
           break;
            case "Latest": 
            const latest = await Api.get("/api/profile/profiles")
            setProfiles(latest.data) 
                break;
            case "Stared":
                const stared = await Api.get("/api/profile/profiles")
                setProfiles(stared.data)
                break;
            default: 
            const defaultData = await Api.get("/api/profile/profiles")
            setProfiles(defaultData.data) 
            
    }}

    useEffect(() => {
        trackMode(mode)
    }, [mode])

return (<div className="main-page">
    <Togglers changeMode={changeMode}/>
    <ImageArea/>
    <CardList profiles={profiles}/>
    </div>)
}

export default MainPage