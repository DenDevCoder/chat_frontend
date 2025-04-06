import React from "react";
import { StyledPaper } from "../atoms/StyledPaper";
import { Box } from "@mui/material";

const MessageItem: React.FC<{ text: string; isCurrentUser?: boolean }> = ({
  text,
  isCurrentUser,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isCurrentUser ? "flex-end" : "flex-start",
        mb: 2,
        px: 2,
      }}
    >
      <StyledPaper
        sx={{
          maxWidth: "70%",
          p: 2,
          backgroundColor: isCurrentUser ? "#1976d2" : "#e0e0e0",
          color: isCurrentUser ? "#fff" : "#000",
          borderRadius: isCurrentUser ? "18px 18px 0 18px" : "18px 18px 18px 0",
          wordBreak: "break-word",
        }}
      >
        {text}
      </StyledPaper>
    </Box>
  );
};

export default MessageItem;
