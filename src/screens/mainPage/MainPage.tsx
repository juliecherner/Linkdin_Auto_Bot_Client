import {useEffect, useContext} from "react"
import CardList from "./components/cardList/CardList"
import Togglers from "./components/togglers/Togglers"
import ImageArea from "./components/imageArea/imageArea"
import Api from "../../api/Api"
import {ProfileContext} from "../../context/profile.context"

const MainPage: React.FC = () => {

const {setProfiles, mode} = useContext(ProfileContext)

    useEffect(() => {
        const trackMode = async()=>{
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
        trackMode()
    }, [mode, setProfiles])

return (
        <div className="main-page">
            <Togglers/>
            <ImageArea/>
            <CardList/>
        </div>)
}

export default MainPage