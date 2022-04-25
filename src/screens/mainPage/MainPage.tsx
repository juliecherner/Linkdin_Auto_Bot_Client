import { useEffect, useContext } from "react";
import CardList from "./components/cardList/CardList";
import Togglers from "./components/togglers/Togglers";
import ImageArea from "./components/imageArea/imageArea";
import { ProfileContext } from "../../context/profile.context";
import { UserContext } from "../../context/user.context";

const MainPage: React.FC = () => {
  const { mode, trackMode } = useContext(ProfileContext);
  const { userInputs } = useContext(UserContext);

  useEffect(() => {
    trackMode();
  }, [mode]);

  return (
    <div className="main-page">
      {userInputs.logged && <Togglers />}
      <ImageArea />
      <CardList />
    </div>
  );
};

export default MainPage;
