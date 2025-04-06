import { FormInput } from "../atoms/FormInput";
import styled from "styled-components";
import { Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { StyledIconButton } from "../atoms/StyledIconButton";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useSocket } from "../context/SocketProvider";

const InputContainer = styled(Box)`
  max-width: 700px;
  width: 100%;
  display: flex;
`;

const IconContainer = styled(Box)`
  display: flex;
  align-items: flex-end;
`;

const MessageInput = () => {
  const { socket } = useSocket();
  const chat = useSelector((state: RootState) => state.chat);
  const user = useSelector((state: RootState) => state.userSession).user;
  const [message, setMessage] = useState<string>("");
  const sendMessage = () => {
    if (socket) {
      console.log(user);
      socket.emit("send-message", {
        chatId: chat.chatId,
        text: message,
        userId: user?.user.id,
      });
      console.log("sended by socket");
      setMessage("");
    }
    console.log("Send message: ", message, "to", chat.chatId);
    setMessage("");
  };
  return (
    <InputContainer>
      <FormInput
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ background: "#1f232f", border: "none" }}
        multiline
        maxRows={5}
      />
      <IconContainer>
        <StyledIconButton onClick={sendMessage}>
          <SendIcon />
        </StyledIconButton>
      </IconContainer>
    </InputContainer>
  );
};

export default MessageInput;
