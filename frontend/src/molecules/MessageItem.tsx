import React from "react";
import { StyledPaper } from "../atoms/StyledPaper";
import { Box, Typography } from "@mui/material";

interface MessageItemProps {
  text: string;
  isCurrentUser?: boolean;
  createdAt?: Date | string;
}

const MessageItem: React.FC<MessageItemProps> = ({
  text,
  isCurrentUser,
  createdAt,
}) => {
  const formatMessageTime = (date?: Date | string) => {
    if (!date) return "";

    const messageDate = typeof date === "string" ? new Date(date) : date;

    return messageDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isCurrentUser ? "flex-end" : "flex-start",
        mb: 2,
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: isCurrentUser ? "flex-end" : "flex-start",
          maxWidth: "70%",
        }}
      >
        <StyledPaper
          sx={{
            p: 2,
            backgroundColor: isCurrentUser ? "#1976d2" : "#e0e0e0",
            color: isCurrentUser ? "#fff" : "#000",
            borderRadius: isCurrentUser
              ? "18px 18px 0 18px"
              : "18px 18px 18px 0",
            wordBreak: "break-word",
            whiteSpace: "pre-wrap",
          }}
        >
          {text}
        </StyledPaper>
        {createdAt && (
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              color: "white",
              fontSize: "0.75rem",
              alignSelf: isCurrentUser ? "flex-end" : "flex-start",
            }}
          >
            {formatMessageTime(createdAt)}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default MessageItem;
