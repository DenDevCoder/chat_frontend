import { useSelector } from "react-redux";
import useAuthUser from "../hooks/useAuthUser";
import ChatTemplate from "../templates/ChatTemplate";
import ContainerWithSidebar from "../templates/PaddingedContainerWithSidebar";
import { RootState } from "../redux/store";
import CentredFullscreenContainer from "../templates/CentredFullscreenContainer";
import NotExistDilog from "../molecules/NotExistDilog";
const Home = () => {
  const user = useAuthUser();
  const chatExist = useSelector((state: RootState) => state.chat).exist;
  return (
    <ContainerWithSidebar>
      {chatExist == true || chatExist == null ? (
        <ChatTemplate />
      ) : (
        <CentredFullscreenContainer>
          <NotExistDilog />
        </CentredFullscreenContainer>
      )}
    </ContainerWithSidebar>
  );
};

export default Home;
