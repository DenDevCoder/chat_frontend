import styled from "styled-components";
import { Box } from "@mui/material";
import { CenteredText } from "../atoms/CenteredText";
import MessageItem from "../molecules/MessageItem";
import MessageInput from "../molecules/MessageInput";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { messageDto } from "../api/dto/message.dto";
import { useSocket } from "../context/SocketProvider";
import { chatHistory } from "../api/chat-api";

const FullSizeContainer = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
`;

const MessageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MessageInputContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatTemplate = () => {
  const { socket } = useSocket();
  const chatExist = useSelector((state: RootState) => state.chat);
  const user = useSelector((state: RootState) => state.userSession).user;
  const [messages, setMesages] = useState<messageDto[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      if (chatExist.chatId) {
        const messages = await chatHistory(chatExist.chatId);
        setMesages(messages);
      }
    };
    fetchHistory();
  }, [chatExist.chatId]);

  const chat = useSelector((state: RootState) => state.chatInfo);
  return (
    <FullSizeContainer>
      <CenteredText variant="h6" fontWeight={700}>
        {chat.chatName}
      </CenteredText>
      <MessageContainer>
        {messages.map((mes) =>
          user?.user.id === mes.sender.id ? (
            <MessageItem text={mes.text} isCurrentUser={true} />
          ) : (
            <MessageItem text={mes.text} isCurrentUser={false} />
          )
        )}
      </MessageContainer>
      <MessageInputContainer>
        <MessageInput />
      </MessageInputContainer>
    </FullSizeContainer>
  );
};

export default ChatTemplate;
