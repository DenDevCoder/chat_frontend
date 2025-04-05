import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { createChat } from "../api/chat-api";
import { setChatInfo } from "../redux/Slice/chatInfoSlice";
import { setChat } from "../redux/Slice/chatSlice";

const NotExistDilog = () => {
  const dispatch = useDispatch();
  const chatInfo = useSelector((state: RootState) => state.chatInfo);

  const handleCreateChat = async () => {
    try {
      console.log(chatInfo);
      const chat = await createChat(chatInfo.userId!);
      dispatch(
        setChatInfo({ chatName: chat.user.username, userId: chat.user.id })
      );
      dispatch(setChat({ chatId: chat.chatId, exist: true }));
    } catch (e: any) {
      throw new Error(e.message);
    }
  };
  return (
    <Paper
      sx={{
        minWidth: "200px",
        minHeight: "100px",
        width: "20%",
        height: "10%",
        textAlign: "center",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">chat not exist</Typography>
      <Button onClick={() => handleCreateChat()}>Create</Button>
    </Paper>
  );
};

export default NotExistDilog;
