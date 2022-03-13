import {useEffect, useState} from "react"
import Header from "./components/header/Header"
import CardList from "./components/cardList/CardList"
import Togglers from "./components/togglers/Togglers"
import {data} from "../../fakeData"
import {I_Owner} from "../../types/types"

console.log("data from main", data)
const MainPage: React.FC = () => {
    const [mode, setMode] = useState("Relevant")
    const [actualData, setActualData] = useState<I_Owner[]>([])

    console.log("actial data check it!!!", actualData)

    const changeMode = (event: any) => {
    setMode(event.target.innerText)
    }

    const trackMode = (mode: string) => {
        switch (mode){
            case "Relevant": 
               const first = data[0]
                setActualData([first]) 
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

return (<div>
    <Header/>
    <Togglers changeMode={changeMode}/>
    {mode}
    <CardList owners={actualData}/>
    </div>)
}

export default MainPage