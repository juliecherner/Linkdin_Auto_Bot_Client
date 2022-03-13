import {array} from "./constants/Header.constants"

const Header: React.FC = () => {
    return (<div>
        <div>Header</div>
        <div>{array.map((arr: number, index:number)=> <div key={index}>{arr}</div>)}</div>
    </div>)
    }
    
export default Header