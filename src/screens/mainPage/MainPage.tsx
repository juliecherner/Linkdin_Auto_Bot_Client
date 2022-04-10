import { useEffect, useContext } from "react";
import CardList from "./components/cardList/CardList";
import Togglers from "./components/togglers/Togglers";
import ImageArea from "./components/imageArea/imageArea";
import { ProfileContext } from "../../context/profile.context";

const MainPage: React.FC = () => {
  const { mode, trackMode } = useContext(ProfileContext);

  useEffect(() => {
    trackMode();
  }, [mode]);

  return (
    <div className="main-page">
      <Togglers />
      <ImageArea />
      <CardList />
    </div>
  );
};

export default MainPage;
