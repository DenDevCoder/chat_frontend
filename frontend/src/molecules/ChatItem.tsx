import { FC } from "react";
import { StyledListItem } from "../atoms/StyledListItem";
import StyledListAvatar from "../atoms/StyledListAvatar";
import StyledListItemText from "../atoms/StyledListItemText";

interface ChatItemProps {
  chatId: string;
  chat_name: string;
  isCollapsed: boolean;
}

const ChatItem: FC<ChatItemProps> = ({ chatId, chat_name, isCollapsed }) => {
  return (
    <StyledListItem
      key={chatId}
      sx={{
        justifyContent: isCollapsed ? "center" : "flex-start",
      }}
    >
      <StyledListAvatar
        margin="0 auto"
        alt={chat_name}
        src="/static/images/avatar/1.jpg"
      />

      {!isCollapsed && <StyledListItemText primary={chat_name} />}
    </StyledListItem>
  );
};

export default ChatItem;
