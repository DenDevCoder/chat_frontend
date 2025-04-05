import styled from "styled-components";
import { Box } from "@mui/material";
import { CenteredText } from "../atoms/CenteredText";
import MessageItem from "../molecules/MessageItem";
import MessageInput from "../molecules/MessageInput";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const FullSizeContainer = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
`;

const MessageContainer = styled(Box)`
  flex: 1;
`;

const MessageInputContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatTemplate = () => {
  const chat = useSelector((state: RootState) => state.chatInfo);
  return (
    <FullSizeContainer>
      <CenteredText variant="h6" fontWeight={700}>
        {chat.chatName}
      </CenteredText>
      <MessageContainer>
        <MessageItem />
      </MessageContainer>
      <MessageInputContainer>
        <MessageInput />
      </MessageInputContainer>
    </FullSizeContainer>
  );
};

export default ChatTemplate;
