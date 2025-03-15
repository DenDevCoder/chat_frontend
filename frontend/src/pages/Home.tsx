import useAuthUser from "../hooks/useAuthUser";
import ChatTemplate from "../templates/ChatTemplate";
import ContainerWithSidebar from "../templates/PaddingedContainerWithSidebar";

const Home = () => {
  useAuthUser();
  return (
    <ContainerWithSidebar>
      <ChatTemplate />
    </ContainerWithSidebar>
  );
};

export default Home;
