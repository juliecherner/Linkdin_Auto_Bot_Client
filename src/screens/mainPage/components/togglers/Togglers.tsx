import {useState} from "react"
interface Props {
  changeMode: (event: React.MouseEvent<HTMLButtonElement>, toggler:string) => void
}
const togglers: string[] = ["Relevant", "Latest", "Stared"]

const Togglers: React.FC <Props> = ({changeMode}) => {

  const [mode, setMode] = useState<string>("")

  //needs refactoring with context
  const changeModeLocally = (toggler: string) =>{
       setMode(toggler)
  }

  return (
    <div className="main-page--togglers">
      {togglers.map((toggler: string) => <button className={(mode === toggler)? "main-page--toggler-bold": ""} key={toggler}
      onClick={(event)=> {changeMode(event,toggler); changeModeLocally(toggler)}}>{toggler}</button>)}
    </div>
  );
};

export default Togglers;
