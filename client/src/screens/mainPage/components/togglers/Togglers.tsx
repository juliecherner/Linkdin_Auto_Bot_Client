
interface Props {
  changeMode: (event: React.MouseEvent<HTMLButtonElement>, toggler:string) => void
}

const togglers: string[] = ["Relevant", "Latest", "Stared"]

const Togglers: React.FC <Props> = ({changeMode}) => {

  return (
    <div className="main-page--togglers">
      {togglers.map((toggler: string) => <button key={toggler} onClick={(event)=> changeMode(event,toggler)}>{toggler}</button>)}
    </div>
  );
};

export default Togglers;
