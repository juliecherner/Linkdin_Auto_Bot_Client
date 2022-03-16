import {useEffect, useState} from "react"
import Header from "./components/header/Header"
import CardList from "./components/cardList/CardList"
import Togglers from "./components/togglers/Togglers"
import ImageArea from "./components/imageArea/imageArea"
import {data} from "../../fakeData"
import {I_Owner} from "../../types/types"

console.log("data from main", data)

const MainPage: React.FC = () => {
    const [mode, setMode] = useState<string>("Relevant")
    const [actualData, setActualData] = useState<I_Owner[]>([])
    
    console.log("actial data", actualData)


    const changeMode = (event: React.MouseEvent<HTMLButtonElement>, toggler:string) => {
    setMode(toggler) 
    }

    const trackMode = (mode: string) => {
        switch (mode){
            case "Relevant": 
               const first = data[0]
               const first2 = data[1]
                setActualData([first, first2]) 
           break;
            case "Latest": 
                const second = data[1]
                setActualData([second])  
                break;
            case "Stared":
                const third = data[2]
                setActualData([third])
                break;
            default: 
                const forth = data[3]
                setActualData([forth]) 
    }}

    useEffect(() => {
        trackMode(mode)
    }, [mode])

return (<div className="main-page">
    <Header/>
    <Togglers changeMode={changeMode}/>
    <ImageArea/>
    <CardList owners={actualData}/>
    </div>)
}

export default MainPage