import {array} from "../../../constants/MainPage.constants"

const Header = () => {
    return (<div>
        <div>Header</div>
        <div>{array.map((arr: number)=> <div>{arr}</div>)}</div>
    </div>)
    }
    
export default Header