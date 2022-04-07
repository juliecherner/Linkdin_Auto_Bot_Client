import { useEffect, useContext } from "react";
import CardList from "./components/cardList/CardList";
import Togglers from "./components/togglers/Togglers";
import ImageArea from "./components/imageArea/imageArea";
import { ProfileContext } from "../../context/profile.context";
import { getProfiles } from "../../api/profile.api";

const MainPage: React.FC = () => {
  const { setProfiles, mode } = useContext(ProfileContext);

  useEffect(() => {
    const trackMode = async () => {
      switch (mode) {
        case "Relevant":
          const relevant = await getProfiles();
          setProfiles(relevant);
          break;
        case "Latest":
          const latest = await getProfiles({}, { createdAt: -1 });
          setProfiles(latest);
          break;
        case "Stared":
          const stared = await getProfiles({ isStared: true }, {});
          setProfiles(stared);
          break;
        default:
          const defaultData = await getProfiles();
          setProfiles(defaultData);
      }
    };
    trackMode();
  }, [mode, setProfiles]);

  return (
    <div className="main-page">
      <Togglers />
      <ImageArea />
      <CardList />
    </div>
  );
};

export default MainPage;
