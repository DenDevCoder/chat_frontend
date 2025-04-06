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
import { useRef } from "react";
import { chatHistory } from "../api/chat-api";

const FullSizeContainer = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
`;

const MessageContainer = styled(Box)`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const MessageInputContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatTemplate = () => {
  const endMessageRef = useRef<HTMLDivElement>(null);
  const { socket } = useSocket();
  const chatExist = useSelector((state: RootState) => state.chat);
  const user = useSelector((state: RootState) => state.userSession).user;
  const [messages, setMessages] = useState<messageDto[]>([]);
  const chat = useSelector((state: RootState) => state.chatInfo);

  const scrollToBottom = () => {
    if (endMessageRef.current) {
      endMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const fetchHistory = async () => {
      if (chatExist.chatId) {
        const messages = await chatHistory(chatExist.chatId);
        setMessages(messages);
      }
    };
    fetchHistory();
  }, [chatExist.chatId]);

  useEffect(() => {
    if (!socket || !chatExist.chatId) return;

    const handleNewMessage = (message: messageDto) => {
      if (message.chatId === chatExist.chatId) {
        setMessages((prev) => [...prev, message]);
      }
    };
    socket.on("new-message", handleNewMessage);

    return () => {
      socket.off("new-message", handleNewMessage);
    };
  }, [socket, chatExist.chatId]);

  return (
    <FullSizeContainer>
      <CenteredText variant="h6" fontWeight={700}>
        {chat.chatName}
      </CenteredText>
      <MessageContainer>
        {messages.map((mes) =>
          user?.user.id === mes.sender.id ? (
            <MessageItem
              text={mes.text}
              isCurrentUser={true}
              createdAt={mes.createdAt}
            />
          ) : (
            <MessageItem
              text={mes.text}
              isCurrentUser={false}
              createdAt={mes.createdAt}
            />
          )
        )}
        <div ref={endMessageRef} />
      </MessageContainer>
      <MessageInputContainer>
        <MessageInput />
      </MessageInputContainer>
    </FullSizeContainer>
  );
};

export default ChatTemplate;
