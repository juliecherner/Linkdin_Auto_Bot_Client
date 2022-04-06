import { useContext } from "react";
import { ProfileContext } from "../../../../context/profile.context";

const togglers: string[] = ["Relevant", "Latest", "Stared"];

const Togglers: React.FC = () => {
  const { mode, setMode } = useContext(ProfileContext);

  return (
    <div className="main-page--togglers">
      {togglers.map((toggler: string) => (
        <button
          className={mode === toggler ? "main-page--toggler-bold" : ""}
          key={toggler}
          onClick={() => {
            setMode(toggler);
          }}
        >
          {toggler}
        </button>
      ))}
    </div>
  );
};

export default Togglers;
