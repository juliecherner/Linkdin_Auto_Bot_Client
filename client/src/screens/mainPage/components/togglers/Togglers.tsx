
interface Props {
  changeMode: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const togglers: string[] = ["Relevant", "Latest", "Stared"]

const Togglers: React.FC <Props> = ({changeMode}) => {

  return (
    <div>
      {togglers.map((toggler: string) => <button key={toggler} onClick={(event)=> changeMode(event)}>{toggler}</button>)}
    </div>
  );
};

export default Togglers;
